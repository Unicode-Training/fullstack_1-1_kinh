<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function findAll()
    {
        return User::with('phone')->get();
    }

    public function find(int $id)
    {
        $user = User::find($id);
        $user->load('phone');
        return $user;
    }

    public function create(array $body)
    {
        return DB::transaction(function () use ($body) {
            $user = User::create([
                'name' => $body['name'],
                'email' => $body['email'],
                'password' => Hash::make($body['password']),
            ]);
            if (!empty($body['phone'])) {
                $phone = $user->phone()->create([
                    'phone_number' => $body['phone']
                ]);
                $user->phone = $phone;
            }

            return $user;
        });
    }

    public function update(array $body, int $id)
    {
        $phone = "";
        if (!empty($body['phone'])) {
            $phone = $body['phone'];
            unset($body['phone']);
        }

        $user = User::find($id);

        return DB::transaction(function () use ($user, $body, $phone) {
            $user->update($body);
            //Nếu phone tồn tại trong body
            if ($phone) {
                $user->phone()->updateOrCreate([
                    'user_id' => $user->id
                ], [
                    'phone_number' => $phone
                ]);
            };

            return $user;
        });
    }

    public function delete(int $id)
    {
        return DB::transaction(function () use ($id) {
            $user = User::find($id);
            $user->phone->delete();
            $user->delete();
            return $user;
        });
    }

    public function createPost(int $userId, array $body)
    {
        $user = User::find($userId);
        if (!empty($body[0]) && is_array($body[0])) {
            return $user->posts()->createMany($body);
            // foreach ($body as $item) {
            //     $user->posts()->create($item); //anti-pattern -> kết nối nhiều lần
            // }
        } else {
            return $user->posts()->create($body);
        }
    }

    public function findAllPosts(int $userId)
    {
        // $q = request()->q ?? '';

        // $user =  User::find($userId);

        // $posts = $user->posts()->where('title', 'like', "%$q%")->get();

        // $user->posts = $posts;

        // return $user;

        return User::with('posts')->has('posts')->get();
    }
}

//phone -> Relationship Model

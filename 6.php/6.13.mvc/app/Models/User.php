<?php

namespace App\Models;

use Core\DB;

class User
{
    private $table = 'users';

    public function findAll()
    {
        return DB::table($this->table)->get();
    }
    public function create(array $data)
    {
        return DB::table($this->table)->create($data);
    }

    public function findByEmail(string $email)
    {
        return DB::table($this->table)->where('email', '=', $email)->first();
    }

    public function find(int $id)
    {
        return DB::table($this->table)->where('id', '=', $id)->first();
    }

    public function updateUser(array $userData, int $id)
    {
        return DB::table($this->table)->where('id', '=', $id)->update($userData);
    }
}

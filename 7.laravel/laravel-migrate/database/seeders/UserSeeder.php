<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::statement("SET foreign_key_checks=0"); //Vô hiệu hóa khóa ngoại
        User::truncate(); //Truncate table
        DB::statement("SET foreign_key_checks=1"); //Kích hoạt lại khóa ngoại

        // User::insert([
        //     [
        //         'name' => 'User 1',
        //         'email' => 'user1@gmail.com',
        //         'password' => Hash::make('123456'),
        //         'created_at' => date('Y-m-d H:i:s'),
        //         'updated_at' => date('Y-m-d H:i:s')
        //     ],
        //     [
        //         'name' => 'User 2',
        //         'email' => 'user2@gmail.com',
        //         'password' => Hash::make('123456'),
        //         'created_at' => date('Y-m-d H:i:s'),
        //         'updated_at' => date('Y-m-d H:i:s')
        //     ],
        //     [
        //         'name' => 'User 3',
        //         'email' => 'user3@gmail.com',
        //         'password' => Hash::make('123456'),
        //         'created_at' => date('Y-m-d H:i:s'),
        //         'updated_at' => date('Y-m-d H:i:s')
        //     ]
        // ]);

        $faker = Factory::create();
        $data = [];
        for ($i = 1; $i <= 50; $i++) {
            $data[] = [
                'name' => $faker->name(),
                'email' => $faker->email(),
                'password' => Hash::make('123456'),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ];
        }
        User::insert($data);
    }
}

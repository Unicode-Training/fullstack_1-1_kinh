<?php

namespace Database\Seeders;

use App\Models\Post;
use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create();
        $data = [];

        for ($i = 1; $i <= 50; $i++) {
            $data[] = [
                'title' => $faker->sentence(),
                'content' => $faker->text(),
                'user_id' => rand(1, 50),
                'status' => rand(0, 1),
                'tags' => implode(',', $faker->words()),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ];
        }

        DB::statement("SET foreign_key_checks=0"); //Vô hiệu hóa khóa ngoại
        Post::truncate(); //Truncate table
        DB::statement("SET foreign_key_checks=1"); //Kích hoạt lại khóa ngoại

        Post::insert($data);
    }
}

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
}

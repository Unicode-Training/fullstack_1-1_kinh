<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    private User $userModel;
    public function __construct()
    {
        $this->userModel = new User();
    }
    public function findAll()
    {
        return $this->userModel->findAll();
    }
    public function create(array $data)
    {
        $this->userModel->create($data);
    }
    public function find(int $id)
    {
        $user =  $this->userModel->find($id);
        return $user;
    }
}

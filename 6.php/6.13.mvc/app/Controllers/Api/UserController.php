<?php

namespace App\Controllers\Api;

use App\Services\UserService;

class UserController
{
    private UserService $userService;

    public function __construct()
    {
        $this->userService = new UserService();
    }

    public function findAll()
    {
        $data = $this->userService->findAll();
        return response()->json([
            'success' => true,
            'message' => 'Get users success',
            'data' => $data
        ]);
    }
}

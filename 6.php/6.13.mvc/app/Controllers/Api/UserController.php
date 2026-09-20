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

        //db = 0
        // Redis::set('user', 'hoangan');
        // Redis::select(1);
        // Redis::set('user', 'kinh');

        return response()->json([
            'success' => true,
            'message' => 'Get users success',
            'data' => $data,
        ]);
    }
}

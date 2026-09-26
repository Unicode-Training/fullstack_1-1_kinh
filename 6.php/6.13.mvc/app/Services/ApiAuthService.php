<?php

namespace App\Services;

use App\Models\User;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


class ApiAuthService
{
    private User | null $userModel = null;
    public function __construct()
    {
        $this->userModel = new User();
    }
    public function login(array $body)
    {
        ['email' => $email, 'password' => $password] = $body;

        $user = $this->userModel->findByEmail($email);

        if (!$user) {
            return false;
        }

        $passwordHash = $user->password;

        if (!password_verify($password, $passwordHash)) {
            return false;
        }

        return [
            'accessToken' => $this->generateToken($user)
        ];
    }

    public function profile() {}

    private function generateToken(object $user)
    {
        $payloadAccess = [
            'sub' => $user->id, //id
            'iat' => time(), //thời gian tạo token
            'exp' => time() + $_ENV['JWT_EXPIRES_IN']
        ];

        $accessToken = JWT::encode($payloadAccess, $_ENV['JWT_SECRET'], 'HS256');

        $payloadRefresh = [
            'sub' => $user->id, //id
            'iat' => time(), //thời gian tạo token
            'exp' => time() + $_ENV['JWT_REFRESH_EXPIRES_IN']
        ];

        $refreshToken = JWT::encode($payloadRefresh, $_ENV['JWT_REFRESH_SECRET'], 'HS256');

        return compact('accessToken', 'refreshToken');
    }
}

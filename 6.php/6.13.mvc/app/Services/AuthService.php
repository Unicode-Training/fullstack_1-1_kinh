<?php

namespace App\Services;

use App\Models\User;

class AuthService
{
    private User $userModel;
    public function __construct()
    {
        $this->userModel = new User();
    }
    public function register(array $data)
    {
        $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        return $this->userModel->create($data);
    }

    public function login(string $email, string $password)
    {
        //Luồng login
        //1. Check email có tồn tại trong Database hay không?
        $user = $this->userModel->findByEmail($email);
        if (!$user) {
            return false;
        }
        //2. Lấy password hash từ Database
        $passwordHash = $user->password;
        //3. So sánh password hash và password từ request gửi lên
        if (!password_verify($password, $passwordHash)) {
            return false;
        }
        //4. Lưu session
        $_SESSION['user_login'] = $user;

        return true;
    }
}

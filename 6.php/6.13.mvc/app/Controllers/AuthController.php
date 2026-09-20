<?php

namespace App\Controllers;

use App\Services\AuthService;
use Core\Request;
use Core\Session;
use Core\View;

class AuthController
{
    private AuthService $authService;
    public function __construct()
    {
        $this->authService = new AuthService();
    }

    public function login(Request $request)
    {
        $pageTitle = 'Đăng nhập';
        $msg = Session::flash('msg');
        return View::render('auth/login', [
            'layout' => 'layouts/main-layout',
            'pageTitle' => $pageTitle,
            'msg' => $msg
        ]);
    }

    public function handleLogin(Request $request)
    {
        ['email' => $email, 'password' => $password] = $request->body();

        $data = $this->authService->login($email, $password);
        if ($data) {
            return response()->redirect('/');
        }
        Session::flash('msg', 'Email hoặc mật khẩu không chính xác');
        return response()->redirect('/login');
    }


    public function register(Request $request)
    {
        return View::render('auth/register', [
            'layout' => 'layouts/main-layout'
        ]);
    }

    public function handleRegister(Request $request)
    {
        $body = $request->body();
        $data = $this->authService->register($body);
        if ($data) {
            return response()->redirect('/login');
        }

        return response()->redirect('/register');
    }

    public function logout()
    {
        unset($_SESSION['user_login']);
        return response()->redirect('/login');
    }
}

//route -> controller -> service -> model -> database
//JWT
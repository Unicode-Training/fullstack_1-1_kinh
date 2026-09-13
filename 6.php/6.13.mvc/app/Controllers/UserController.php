<?php

namespace App\Controllers;

use App\Services\UserService;
use Core\Request;
use Core\View;

class UserController
{
    private UserService $userService;

    public function __construct()
    {
        $this->userService = new UserService();
    }

    public function index(Request $request)
    {
        return View::render('users/index');
    }

    public function show(Request $request, string $id)
    {
        $title = 'Học PHP không khó';
        return View::render('users/show', compact('id', 'title'));
    }

    public function create(Request $request)
    {
        return View::render('users/create');
    }

    public function store(Request $request)
    {
        //Logic cần xử lý trước (Bussiness Logic)
        $this->userService->create($request->body());

        return response()->redirect('/users');
    }
}

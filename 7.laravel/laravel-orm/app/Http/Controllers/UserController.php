<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct(private UserService $userService) {}

    public function findAll()
    {
        $data = $this->userService->findAll();
        return $data;
    }

    public function find(int $id)
    {
        $data = $this->userService->find($id);
        return $data;
    }

    public function create(Request $request)
    {
        $data = $this->userService->create($request->all());
        return $data;
    }

    public function update(Request $request, int $id)
    {
        $data = $this->userService->update($request->all(), $id);
        return $data;
    }

    public function delete(int $id)
    {
        $data = $this->userService->delete($id);
        return $data;
    }

    public function createPost(Request $request, int $id)
    {
        $data = $this->userService->createPost($id, $request->all());
        return $data;
    }

    public function findAllPosts(int $id)
    {
        $data = $this->userService->findAllPosts($id);
        return $data;
    }
}

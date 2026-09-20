<?php
//Cấu hình route -> bootstrap gọi vào

use App\Controllers\HomeController;
use App\Controllers\UserController;
use App\Controllers\Api\UserController as ApiUserController;
use App\Controllers\AuthController;
use Core\Route;

Route::get('/', [HomeController::class, 'index']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/create', [UserController::class, 'create']);
Route::post('/users/create', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);

Route::get('/test', function () {
    return 'Test';
});

Route::get('/login', [AuthController::class, 'login']);
Route::post('/login', [AuthController::class, 'handleLogin']);
Route::get('/register', [AuthController::class, 'register']);
Route::post('/register', [AuthController::class, 'handleRegister']);
Route::post('/logout', [AuthController::class, 'logout']);


//API
Route::get('/api/users', [ApiUserController::class, 'findAll']);

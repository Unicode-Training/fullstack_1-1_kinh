<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserCourseController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'findAll']);
Route::get('/products/{id}', [ProductController::class, 'find']);
Route::post('/products', [ProductController::class, 'create']);
Route::patch('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'delete']);
Route::post('/products/{id}/restore', [ProductController::class, 'restore']);

Route::get('/users', [UserController::class, 'findAll']);
Route::get('/users/{id}', [UserController::class, 'find']);
Route::post('/users', [UserController::class, 'create']);
Route::patch('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'delete']);

Route::post('/users/{id}/posts', [UserController::class, 'createPost']);
Route::get('/users/{id}/posts', [UserController::class, 'findAllPosts']);

Route::get('/courses', [CourseController::class, 'findAll']);
Route::post('/courses', [CourseController::class, 'create']);

Route::post('/users-courses/{userId}/{courseId}', [UserCourseController::class, 'addCourse']);
Route::delete('/users-courses/{userId}/{courseId}', [UserCourseController::class, 'removeCourse']);
Route::put('/users-courses/{userId}', [UserCourseController::class, 'syncCourses']);
Route::get('/users-courses/{courseId}/users', [UserCourseController::class, 'findUsersByCourse']);

<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserController::class, 'create']);
Route::post('/users', [UserController::class, 'store']);

Route::group(['prefix' => '/products', 'as' => 'products.'], function () {
    Route::get('/', [ProductController::class, 'index'])->name('index');
    Route::get('/create', [ProductController::class, 'create'])->name('create');
    Route::post('/create', [ProductController::class, 'store']);
    Route::patch('/{id}/status', [ProductController::class, 'updateStatus'])->name('update-status');
    Route::get('/{id}/edit', [ProductController::class, 'edit'])->name('edit');
    Route::put('/{id}', [ProductController::class, 'update'])->name('update');
    Route::delete('/{id}', [ProductController::class, 'delete'])->name('delete');
    Route::delete('/', [ProductController::class, 'deleteMany'])->name('delete-many');
});

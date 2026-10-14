<?php

namespace App\Providers;

use App\Core\Demo;
use App\Services\AttributeService;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Foundation\Application;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(Demo::class, function (Application $app) {
            $attribute = $app->make(AttributeService::class); //Lấy instance của AttributeService đã được khởi tạo trong Service Container
            return new Demo($attribute, 'Hello anh em'); //Tự khởi tạo class
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // echo 'AppServiceProvider';
    }
}

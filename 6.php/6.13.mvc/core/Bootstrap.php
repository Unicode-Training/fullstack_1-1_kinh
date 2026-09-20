<?php

namespace Core;

use Dotenv\Dotenv;


class Bootstrap
{
    public function init()
    {
        //Khởi tạo session
        session_save_path(__DIR__ . '/../storage/sessions');
        session_start();

        //Khởi tạo request
        $request = new Request();

        //Khởi tạo response
        $response = new Response();
        $GLOBALS['response'] = $response;

        $dotenv = Dotenv::createImmutable(__DIR__ . '/../');
        $dotenv->load();

        //Load helper
        $this->loadHelper();

        //Load route config
        $this->loadRouteConfig();
        //Thực thi route
        Route::resolve($request);
    }

    private function loadRouteConfig()
    {
        require_once __DIR__ . '/../routes/route.php';
    }

    private function loadHelper()
    {
        require_once __DIR__ . '/../core/Helper.php';
    }
}

//Routing

// / -> HomeController, method index
// /users -> UserController, method index
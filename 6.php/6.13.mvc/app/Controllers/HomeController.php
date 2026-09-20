<?php

namespace App\Controllers;

use Core\Request;
use Core\View;

class HomeController
{
    //Action
    public function index(Request $request)
    {
        $_SESSION['name'] = 'hoangan';
        return View::render('home/index', [
            'layout' => 'layouts/main-layout'
        ]);
    }
}

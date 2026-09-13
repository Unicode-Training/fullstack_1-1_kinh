<?php

namespace App\Controllers;

use Core\Request;
use Core\View;

class HomeController
{
    //Action
    public function index(Request $request)
    {
        return View::render('home/index');
    }
}

<?php

namespace App\Client;

use Core\Request;
use Core\Route;

class Home
{
    public function __construct()
    {
        echo "Home from Client<br/>";
        $route = new Route();
        $request = new Request();
    }
}

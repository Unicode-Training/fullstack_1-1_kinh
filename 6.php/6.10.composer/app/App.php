<?php

namespace Application;

use Application\Controllers\Admin\DashboardController;
use Application\Controllers\HomeController;
use \Core\Route;
use LegacyDemo;

class App
{
    public function __construct()
    {
        echo "App<br/>";
        new HomeController();
        new DashboardController();
        request();
        new Route();
        new LegacyDemo();
        echo '<pre>';
        print_r($_SERVER);
        echo '</pre>';
    }
}

<?php
//namespace
// - Tránh trùng lặp class
// - Tự động autoload (PSR-4)


require_once './client/home.php';
require_once './admin/home.php';
require_once './core/route.php';
require_once './core/request.php';

$homeClient = new App\Client\Home();
$homeAdmin = new App\Admin\Home();

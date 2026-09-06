<?php
$pathname = $_SERVER['PATH_INFO'] ?? '/';

$routes = [
    '/' => 'home',
    '/users' => 'users',
    '/products' => 'products',
    '/posts' => 'posts/index',
    '/posts/{id}' => 'posts/detail',
    '/uploads' => 'uploads',
    '/image' => 'image'
];

$pageMatch = null;
$params = null;
foreach ($routes as $key => $value) {
    $pattern = '~^' . preg_replace('~{.+}~', '(.+)', $key) . '$~';
    $result = preg_match($pattern, $pathname, $matches);

    if (!empty($matches)) {
        $pageMatch = $value;
        $params = $matches[1] ?? null;
        break;
    }
}

$page = $pageMatch ?? "/not-found";

$pagePath = './pages/' . $page . '.php';

require_once $pagePath;

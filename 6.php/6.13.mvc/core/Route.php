<?php

namespace Core;

use Closure;

class Route
{
    private static $routes = [];

    public static function resolve(Request $request)
    {
        $path = self::getPath();
        $method = self::getMethod();
        $routeArray = self::$routes[$method] ?? [];
        [$handler, $params] = self::handleRoutePath($routeArray, $path);
        if ($handler) {
            if ($handler instanceof Closure) {
                echo $handler();
            } else {
                //Gọi controller
                [$controllerName, $action] = $handler;
                $instance = new $controllerName;
                $output = $instance->$action($request, $params);
                echo $output;
            }
        } else {
            //Gọi 404
            http_response_code(404);
            require_once __DIR__ . '/../app/views/errors/404.php';
        }
    }

    public static function handleRoutePath(array $routeArray, string $path)
    {
        $handlerMath = null;
        $params = null;
        foreach ($routeArray as $key => $value) {
            $pattern = '~^' . preg_replace('~{.+}~', '(.+)', $key) . '$~';
            preg_match($pattern, $path, $matches);

            if (!empty($matches)) {
                $handlerMath = $value;
                $params = $matches[1] ?? null;
                break;
            }
        }

        return [$handlerMath, $params];
    }

    public static function get(string $path, mixed $handler)
    {
        self::$routes['get'][$path] = $handler;
    }
    public static function post(string $path, mixed $handler)
    {
        self::$routes['post'][$path] = $handler;
    }
    public static function put(string $path, mixed $handler)
    {
        self::$routes['put'][$path] = $handler;
    }
    public static function patch(string $path, mixed $handler)
    {
        self::$routes['patch'][$path] = $handler;
    }
    public static function delete(string $path, mixed $handler)
    {
        self::$routes['delete'][$path] = $handler;
    }

    private static function getMethod()
    {
        return strtolower($_SERVER['REQUEST_METHOD']);
    }

    private static function getPath()
    {
        return !empty($_SERVER['PATH_INFO']) ? rtrim($_SERVER['PATH_INFO'], '/') : '/';
    }
}

//method path -> handler
/*
[ten-method][path] = handler
*/
<?php

namespace Core;

use Closure;
use Error;

class Route
{
    private static $routes = [];

    private $currentRoute = [];

    private static null | object $instance = null;

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
                @[$controllerName, $action, $middlewareList] = $handler;

                $isNext = false;
                $currentMiddlewareHandle = null;
                if (!empty($middlewareList)) {
                    //Xử lý middleware
                    if (is_array($middlewareList)) {
                        //Lặp
                        foreach ($middlewareList as $middlewareClass) {
                            $middlewareInstance = new $middlewareClass();
                            $currentMiddlewareHandle = $middlewareInstance->handle($request, function () use (&$isNext) {
                                $isNext = true;
                            });
                        }
                    } else {
                        //Xử lý luôn
                        $middlewareInstance = new $middlewareList();
                        $currentMiddlewareHandle = $middlewareInstance->handle($request, function () use (&$isNext) {
                            $isNext = true;
                        });
                    }
                } else {
                    $isNext = true;
                }


                if (!$isNext) {
                    if (is_null($currentMiddlewareHandle)) {
                        throw new Error("Request bị chặn bởi Middleware");
                    } else {
                        echo $currentMiddlewareHandle;
                    }
                } else {
                    $instance = new $controllerName;
                    $output = $instance->$action($request, $params);
                    echo $output;
                }
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

    private static function get(string $path, mixed $handler)
    {
        self::$routes['get'][$path] = $handler;
        self::$instance->currentRoute = [
            'method' => 'get',
            'path' => $path
        ];
        return self::$instance;
    }
    private static function post(string $path, mixed $handler)
    {
        self::$routes['post'][$path] = $handler;
        self::$instance->currentRoute = [
            'method' => 'post',
            'path' => $path
        ];
        return self::$instance;
    }
    private static function put(string $path, mixed $handler)
    {
        self::$routes['put'][$path] = $handler;
        self::$instance->currentRoute = [
            'method' => 'put',
            'path' => $path
        ];
        return self::$instance;
    }
    private static function patch(string $path, mixed $handler)
    {
        self::$routes['patch'][$path] = $handler;
        self::$instance->currentRoute = [
            'method' => 'patch',
            'path' => $path
        ];
        return self::$instance;
    }
    private static function delete(string $path, mixed $handler)
    {
        self::$routes['delete'][$path] = $handler;
        self::$instance->currentRoute = [
            'method' => 'delete',
            'path' => $path
        ];
        return self::$instance;
    }

    public static function __callStatic(string $name, array $arguments)
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$name(...$arguments);
    }

    public function __call(string $name, array $arguments)
    {
        if ($name == 'middleware') {
            ['method' => $method, 'path' => $path] = self::$instance->currentRoute;
            self::$routes[$method][$path][] = $arguments[0];
        }
    }

    private static function middleware(string | array $middleware) {}

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
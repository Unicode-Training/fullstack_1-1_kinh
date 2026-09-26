<?php

namespace App\Middleware;

use Closure;
use Core\Log;
use Core\Request;

class LoggingMiddleware
{
    public function handle(Request $request, Closure $next)
    {

        Log::info(json_encode([1, 2, 3]));
        // $next();
        return response()->json(['success' => false], 401);
    }
}

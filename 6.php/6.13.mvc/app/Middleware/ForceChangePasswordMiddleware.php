<?php

namespace App\Middleware;

use Closure;
use Core\Request;

class ForceChangePasswordMiddleware
{
    const TTL = 7776000;

    public function handle(Request $request, Closure $next)
    {
        if ($request->user) {
            $user = $request->user;
            $diff = time() - strtotime($user->last_change_password);

            if ($diff > self::TTL) {
                //3 tháng
                return response()->json([
                    'message' => 'Hãy đổi mật khẩu',
                    'success' => false
                ], 400);
            }
        }

        $next();
    }
}

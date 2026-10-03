<?php

namespace App\Middleware;

use App\Services\UserService;
use Closure;
use Core\Log;
use Core\Redis;
use Core\Request;
use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AuthMiddleware
{
    private null | UserService $userService = null;
    public function __construct()
    {
        $this->userService = new UserService();
    }
    public function handle(Request $request, Closure $next)
    {
        $token = $this->parseTokenFromHeader($request);
        $decoded = $this->verifyToken($token);
        if (!$decoded) {
            return response()->json([
                'success' => false,
                'message' => 'Token invalid'
            ], 401);
        }

        //Check blacklist
        // - Nếu tồn tại blacklist -> Từ chối -> Báo lỗi
        // - Nếu không tồn tại -> Bỏ qua
        if (Redis::exists("blacklist:{$decoded->jti}")) {
            return response()->json([
                'success' => false,
                'message' => 'Token invalid'
            ], 401);
        }

        //Lấy jti, exp
        // Log::info(json_encode($decoded));
        $userId = $decoded->sub;
        $user = $this->userService->find($userId);
        $request->user = $user;
        $request->jti = $decoded->jti;
        $request->exp = $decoded->exp;
        $next();
    }

    private function parseTokenFromHeader(Request $request)
    {
        $authorization = $request->headers('Authorization') ?? '';
        $array = explode(' ', $authorization);
        $token = end($array);
        return $token;
    }

    private function verifyToken(string $token)
    {
        try {
            $decoded = JWT::decode($token, new Key($_ENV['JWT_SECRET'], 'HS256'));
            return $decoded;
        } catch (Exception $e) {
            return false;
        }
    }
}

<?php

namespace App\Controllers\Api;

use App\Services\ApiAuthService;
use Core\Request;

class AuthController
{
    private ApiAuthService | null $authService = null;
    public function __construct()
    {
        $this->authService = new ApiAuthService();
    }
    public function login(Request $request)
    {
        $data = $this->authService->login($request->body());
        if (!$data) {
            return response()->json([
                'success' => false,
                'message' => 'Email hoặc mật khẩu không chính xác'
            ], 401);
        }
        return response()->json([
            'success' => true,
            'data' => $data
        ]);
    }

    public function profile(Request $request)
    {
        return response()->json(['success' => true, 'data' => $request->user]);
    }
}

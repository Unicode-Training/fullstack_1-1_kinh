<?php

namespace App\Controllers\Api;

use App\Services\ApiAuthService;
use Core\Log;
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

    public function logout(Request $request)
    {
        //jti
        //exp
        // -> Lấy từ middleware -> Truyền qua Request
        $jti = $request->jti;
        $exp = $request->exp;
        $userId = $request->user->id;

        $this->authService->logout($jti, $exp, $userId);

        return response()->json(['success' => true, 'message' => 'Logout success']);
    }

    public function refreshToken(Request $request)
    {
        ['refreshToken' => $refreshToken] = $request->body();
        $data = $this->authService->refreshToken($refreshToken);
        if (!$data) {
            return response()->json([
                'success' => false,
                'message' => "Refresh token invalid"
            ], 401);
        }
        return response()->json(['success' => true, 'message' => 'Refresh Token Success', 'data' => $data]);
    }

    public function changePassword(Request $request)
    {
        $data = $this->authService->changePassword($request->body(), $request->user);
        if (!$data->success) {
            return response()->json([
                'success' => false,
                'message' => 'Old password missmatch'
            ], 400);
        }
        return response()->json([
            'message' => 'Change password success',
            'success' => 'true'
        ]);
    }
}

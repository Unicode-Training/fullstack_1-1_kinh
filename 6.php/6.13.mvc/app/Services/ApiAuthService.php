<?php

namespace App\Services;

use App\Models\User;
use Core\Log;
use Core\Redis;
use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;


class ApiAuthService
{
    private User | null $userModel = null;
    const ONLY_ONE_DEVICE = true;
    public function __construct()
    {
        $this->userModel = new User();
    }
    public function login(array $body)
    {
        ['email' => $email, 'password' => $password] = $body;

        $user = $this->userModel->findByEmail($email);

        if (!$user) {
            return false;
        }

        $passwordHash = $user->password;

        if (!password_verify($password, $passwordHash)) {
            return false;
        }

        if (self::ONLY_ONE_DEVICE) {
            //Thu hồi tất cả refreshToken cũ trên redis (Đăng xuất thiết bị khác)
            //Thêm blacklist
            $jtiArray = $this->scanRefreshTokenPattern("refreshToken:{$user->id}:*");
            foreach ($jtiArray as $item) {
                Redis::del("refreshToken:{$user->id}:{$item->jti}");
                Redis::setex("blacklist:{$item->jti}", $item->accessTokenTtl, 'true');
            }
        }

        return $this->generateToken($user);
    }

    private function scanRefreshTokenPattern(string $pattern)
    {
        $keys = Redis::keys($pattern);
        $jtiArray = [];
        foreach ($keys as $key) {
            $keyArray = explode(':', $key);
            $jti = end($keyArray);
            $jtiArray[] = (object)[
                'jti' => $jti,
                'accessTokenTtl' => Redis::get($key)
            ];
        }
        return $jtiArray;
    }

    private function generateToken(object $user)
    {
        $jti = uniqid();
        $payloadAccess = [
            'jti' => $jti,
            'sub' => $user->id, //id
            'iat' => time(), //thời gian tạo token
            'exp' => time() + $_ENV['JWT_EXPIRES_IN']
        ];

        $accessToken = JWT::encode($payloadAccess, $_ENV['JWT_SECRET'], 'HS256');

        $payloadRefresh = [
            'jti' => $jti,
            'sub' => $user->id, //id
            'iat' => time(), //thời gian tạo token
            'exp' => time() + $_ENV['JWT_REFRESH_EXPIRES_IN']
        ];

        $refreshToken = JWT::encode($payloadRefresh, $_ENV['JWT_REFRESH_SECRET'], 'HS256');

        //Lưu refresh token vào redis
        //Key redis: refreshToken:$userId:$jti
        //Value redis: true
        //TTl Redis: $_ENV['JWT_REFRESH_EXPIRES_IN']
        Redis::setex("refreshToken:{$user->id}:{$jti}", $_ENV['JWT_REFRESH_EXPIRES_IN'], $_ENV['JWT_EXPIRES_IN']);

        return compact('accessToken', 'refreshToken');
    }

    public function logout(string $jti, int $exp, int $userId)
    {
        //key redis: blacklist:$jti
        //value redis: true
        //ttl = $exp - time()
        $ttl = $exp - time();
        Redis::setex("blacklist:$jti", $ttl, 'true');
        Redis::del("refreshToken:{$userId}:{$jti}");
    }

    public function refreshToken(string $refreshToken)
    {
        //Check token có hợp lệ hay không?
        $decoded = $this->verifyRefreshToken($refreshToken);
        if (!$decoded) {
            return false;
        }

        //Kiểm tra refreshToken có tồn tại trên Redis hay không?
        $existing = Redis::get("refreshToken:{$decoded->sub}:{$decoded->jti}");
        if (!$existing) {
            return false;
        }

        //Cấp lại access token mới, refresh token mới
        $user = (object)['id' => $decoded->sub];
        $newToken = $this->generateToken($user);

        //Thu hồi refresh token cũ
        Redis::del("refreshToken:{$decoded->sub}:{$decoded->jti}");

        //Thêm blacklist của access token cũ
        Redis::setex("blacklist:$decoded->jti", $existing, 'true');

        return $newToken;
    }

    private function verifyRefreshToken(string $refreshToken)
    {
        try {
            $decoded = JWT::decode($refreshToken, new Key($_ENV['JWT_REFRESH_SECRET'], 'HS256'));
            return $decoded;
        } catch (Exception $e) {
            return false;
        }
    }

    public function changePassword(mixed $body, mixed $user)
    {
        ['oldPassword' => $oldPassword, 'password' => $password] = $body;

        //Verify password cũ
        if (!password_verify($oldPassword, $user->password)) {
            return (object)[
                'success' => false,
            ];
        }

        //Update password mới
        $status = $this->userModel->updateUser([
            'password' => password_hash($password, PASSWORD_DEFAULT),
            'last_change_password' => date('Y-m-d H:i:s')
        ], $user->id);

        if ($status) {
            //Thu hồi các phiên đăng nhập cũ
            $jtiArray = $this->scanRefreshTokenPattern("refreshToken:{$user->id}:*");
            foreach ($jtiArray as $item) {
                Redis::del("refreshToken:{$user->id}:{$item->jti}");
                Redis::setex("blacklist:{$item->jti}", $item->accessTokenTtl, 'true');
            }
        }


        return (object)[
            'success' => true,
        ];
    }
}

//Bài toán mở rộng

// - Xây dựng chức năng quản lý thiết bị đăng nhập
// - Giới hạn số lượng thiết bị đăng nhập
//Ví dụ: Giới hạn 1
// - Request login -> userId -> Quét toàn bộ refreshToken trên redis theo userId
// - Xóa khỏi Redis (Trừ phiên hiện tại)
// - Thêm blacklist

//Đổi mật khẩu
// - Cập nhật tại mật khẩu vào database
// - Thu hồi tất cả các phiên đăng nhập

//Laravel:
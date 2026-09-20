<?php

namespace Core;

class Session
{
    public static function flash(string $key, mixed $value = null)
    {
        if (!$value) {
            $data = $_SESSION[$key] ?? null;
            unset($_SESSION[$key]);
            return $data;
        } else {
            $_SESSION[$key] = $value;
        }
    }
}

<?php

namespace Core;

class Response
{
    public function redirect(string $url)
    {
        header("Location: $url");
        exit;
    }

    public function json(mixed $data, int $status = 200)
    {
        http_response_code($status);
        header("Content-Type: application/json");
        return json_encode($data);
    }
}

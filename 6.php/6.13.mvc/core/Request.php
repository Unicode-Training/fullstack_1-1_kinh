<?php

namespace Core;

class Request
{
    public mixed $user = null;
    public string | null $jti = null;
    public int | null $exp = null;
    public function body()
    {
        $rawBody = file_get_contents('php://input');
        $body = null;
        $contentType = $this->headers('Content-Type');
        if ($contentType === "application/json") {
            $body = json_decode($rawBody, true);
        }

        if ($contentType === "application/x-www-form-urlencoded") {
            parse_str($rawBody, $body);
        }

        if (strpos($contentType, 'multipart/form-data') !== false) {
            $body = $_POST;
        }

        return $body;
    }

    public function headers(string $name)
    {
        $headers = getallheaders();
        return $headers[$name] ?? null;
    }
}

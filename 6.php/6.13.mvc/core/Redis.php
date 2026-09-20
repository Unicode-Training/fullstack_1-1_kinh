<?php

namespace Core;

use Predis\Client;

class Redis
{
    private $client = null; //non-static
    private static mixed $instance = null;
    public function __construct()
    {
        $this->client = new Client([
            'schema' => 'tcp',
            'host' => $_ENV['REDIS_HOST'],
            'port' => $_ENV['REDIS_PORT'],
            'database' => $_ENV['REDIS_DB']
        ]);
    }

    public static function __callStatic(string $name, array $arguments)
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance->client->$name(...$arguments);
    }
}

//Redis::set('key', 'value')
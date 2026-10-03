<?php

namespace Core;

class Log
{
    public static function info(mixed $messages = "")
    {
        if (!defined('STDOUT')) {
            define('STDOUT', fopen('php://stdout', 'wb'));
        }
        $green = "\e[0;32m";
        $reset = "\e[0m";
        fwrite(STDOUT, $green . '[LOG]: ' . json_encode($messages) . "\n" . $reset);
    }
}

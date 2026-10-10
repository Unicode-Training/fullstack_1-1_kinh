<?php

use Dotenv\Dotenv;

require './vendor/autoload.php';
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

use App\Workers\EmailWorker;
use Core\Log;

Log::info('Job Listening...');
while (true) {
    new EmailWorker();
    usleep(2000);
}

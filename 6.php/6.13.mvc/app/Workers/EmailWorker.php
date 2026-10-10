<?php

namespace App\Workers;

use App\Mail\LoginNotice;
use Core\Log;
use Core\Worker;
use Exception;

class EmailWorker extends Worker
{
    protected $queueName = 'email';
    public function __construct()
    {
        parent::__construct();
    }

    public function handle(mixed $job)
    {
        //if else
        // Log::info('handle');
        // Log::info($job);
        switch ($job->name) {
            case 'login-notice':
                $this->sendEmailLoginNotice($job->payload);
                break;
            default:
                throw new Exception("Not found job");
                break;
        }
    }

    private function sendEmailLoginNotice(mixed $payload)
    {
        new LoginNotice($payload);
    }
}

<?php

namespace Core;

use Exception;

class Worker
{
    private string $prefix = "queue";

    public function __construct()
    {
        $this->queueName = $this->prefix . ":" . $this->queueName;
        $this->process();
    }

    private function process()
    {
        // Log::info($this->queueName);
        //Lấy job đầu tiên
        $job = Redis::lpop($this->queueName);

        if (is_null($job)) {
            return;
        }

        $job = json_decode($job);

        Log::info("Job: $job->name processing...");

        try {
            $this->handle($job);
            Log::info("Job $job->name Success");
        } catch (Exception $e) {
            Log::info("Job $job->name Failed: " . $e->getMessage());
        }
    }
}

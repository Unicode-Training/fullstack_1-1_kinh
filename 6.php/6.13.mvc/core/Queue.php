<?php

namespace Core;

class Queue
{
    private string $prefix = "queue";
    public function __construct()
    {
        //Khởi tạo queue
        $this->queueName = $this->prefix . ":" . $this->queueName;
    }

    public function addJob(string $name, mixed $payload)
    {
        $job = [
            'id' => md5(uniqid()),
            'name' => $name,
            'payload' => $payload
        ];
        //Đẩy vào redis để lưu trữ
        Redis::lpush($this->queueName, json_encode($job));
    }
}

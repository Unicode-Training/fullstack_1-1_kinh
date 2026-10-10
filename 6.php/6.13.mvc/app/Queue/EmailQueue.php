<?php

namespace App\Queue;

use Core\Queue;

class EmailQueue extends Queue
{
    protected $queueName = 'email';
    public function __construct()
    {
        parent::__construct();
    }
}

//new EmailQueue()->addJob()
<?php

namespace Core;

use App\Services\MailService;

class Mailable extends MailService
{
    public function __construct()
    {
        parent::__construct();

        //Xử lý gửi
        $this->process();
    }

    private function process()
    {
        // Log::info('process');
        // Log::info($this->subject());
        $to = $this->to();
        $subject = $this->subject();
        $content = $this->view();

        return $this->sendMail($to, $subject, $content);
    }
}

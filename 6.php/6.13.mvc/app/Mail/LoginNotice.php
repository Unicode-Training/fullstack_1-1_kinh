<?php

namespace App\Mail;

use Core\Log;
use Core\Mailable;
use Core\Request;
use Core\View;

class LoginNotice extends Mailable
{
    private mixed $data;
    private Request $request;
    public function __construct(mixed $data)
    {
        $this->data = $data;
        // $this->request = $request;
        parent::__construct();
    }

    public function subject()
    {
        //Khai báo tiêu đề email
        return '[Unicode] - Cảnh báo đăng nhập';
    }

    public function to()
    {
        return $this->data->email;
    }

    public function view()
    {
        //Khai đường dẫn file template
        return View::render('mail/login-notice', [
            'user' => $this->data,
            'userAgent' => 'Test user agent'
        ]);
    }
}


//ApiAuthService -> new LoginNotice($user)
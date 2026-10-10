<?php

namespace App\Services;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class MailService
{
    private PHPMailer $mail;
    public function __construct()
    {
        $this->mail = new PHPMailer(true);
    }

    public function sendMail(string $to, string $subject, string $content)
    {
        $this->mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
        $this->mail->isSMTP();                                            //Send using SMTP
        $this->mail->Host       = $_ENV['MAIL_HOST'];                     //Set the SMTP server to send through
        $this->mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $this->mail->Username   = $_ENV['MAIL_USERNAME'];                     //SMTP username
        $this->mail->Password   = $_ENV['MAIL_PASSWORD'];                               //SMTP password
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $this->mail->Port       = $_ENV['MAIL_PORT'];

        $this->mail->setFrom($_ENV['MAIL_FROM'], $_ENV['MAIL_FROM_NAME']);
        $this->mail->addAddress($to);
        $this->mail->addReplyTo($_ENV['MAIL_REPLY']);

        $this->mail->isHTML(true);                                  //Set email format to HTML
        $this->mail->Subject = $subject;
        $this->mail->Body    = $content;
        $this->mail->CharSet = "UTF-8";
        $this->mail->send();
    }
}

<?php
//Interface
// - Tạo interface là User
// - Tạo 3 class: Customer, Partner, Admin

//Đặc điểm
// - Chỉ được phép khai báo
// - Chỉ chấp nhận public
// - Hỗ trợ đa kế thừa: 1 class có thể implements nhiều interface cùng lúc

// interface UserInterface
// {
//     public function findAll(): array;
//     public function findOne(): object;
//     public function create(array $data): object;
// }

// interface AuthInterface
// {
//     public function check(): bool;
// }

// interface UserWithAuthInterface extends AuthInterface
// {
//     public function update(int $id, array $data): bool;
//     public function delete(int $id): bool;
// }

// class Customer implements UserInterface, AuthInterface
// {
//     public function findAll(): array
//     {
//         return [1, 2, 3];
//     }

//     public function findOne(): object
//     {
//         return (object)[
//             'name' => 'An'
//         ];
//     }

//     public function create(array $data): object
//     {
//         return (object)[
//             'name' => 'An'
//         ];
//     }

//     public function check(): bool
//     {
//         return true;
//     }
// }

// class Partner implements UserWithAuthInterface
// {
//     public function update(int $id, array $data): bool
//     {
//         return true;
//     }

//     public function delete(int $id): bool
//     {
//         return false;
//     }

//     public function check(): bool
//     {
//         return false;
//     }
// }

// interface NotificationInterface
// {
//     public function getTelegram(): string;
// }

// class Notification
// {
//     protected string $email;
//     public function __construct(string $email)
//     {
//         $this->email = $email;
//     }

//     private function send(): bool
//     {
//         echo "Đang gửi email tới: " . $this->email . '<br/>';
//         if ($this instanceof NotificationInterface) {
//             $this->sendTelegram();
//         }
//         return true;
//     }

//     private static function setEmail(string $email)
//     {
//         $instance = new static($email);
//         return $instance;
//     }

//     public function sendTelegram()
//     {
//         echo "Đã gửi thông báo tới telegram: " . $this->getTelegram();
//     }

//     public static function __callStatic(string $name, array $arguments)
//     {
//         if ($name === "to") {
//             return self::setEmail(...$arguments);
//         }
//     }

//     public function __call(string $name, array $arguments)
//     {
//         if ($name === "send") {
//             $this->send();
//         }
//     }
// }

// class EmailNotification extends Notification
// {

//     public function getTelegram(): string
//     {
//         return 'hoanganit19';
//     }
// }

// EmailNotification::to('hoangan.web@gmail.com')->send();

// function dispatch(object $instance)
// {
//     $instance->send();
//     if ($instance instanceof NotificationInterface) {
//         $instance->sendTelegram();
//     }
// }

// dispatch(new EmailNotification("hoangan.web@gmail.com"));

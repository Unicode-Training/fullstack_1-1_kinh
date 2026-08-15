<?php
//Định nghĩa class (Tạo bản thiết kế)
// class User
// {
//     //Thuộc tính
//     public string | null $name = null;
//     public string | null $email = null;
//     public int $a = 10;

//     //Thuộc tính tĩnh
//     public static $message = "Hello anh em";

//     //Hằng số
//     public const DEFAULT_NUMBER = 0;

//     //Hàm khởi tạo: Chạy ngay sau khi instance được tạo
//     public function __construct(string $name, string $email)
//     {
//         $this->name = $name;
//         $this->email = $email;
//     }

//     //Phương thức

//     public function getDefaultNumber()
//     {
//         return self::DEFAULT_NUMBER;
//     }

//     public function getName()
//     {
//         return $this->name;
//     }

//     public function __destruct()
//     {
//         // $this->name = null;
//         // $this->email = null;
//         echo "Hủy";
//     }

//     public static function getMessage()
//     {
//         return self::$message;
//     }
// }
//Tạo đối tượng từ class (Instance)

//Ví dụ về việc dữ liệu static không bị thay đổi
// User::$message = 'ABC';
// echo User::$message;
// $user = new User("An", "an@gmail.com");
// echo User::$message;

// $user = new User("An", "an@gmail.com");
// $user->a = 20;
// echo $user->a . '<br/>';
// $user = new User("An", "an@gmail.com");
// echo $user->a . '<br/>';

// echo User::$message;
// echo User::getMessage();

// $user = new User("An", "an@gmail.com");
// echo $user->getDefaultNumber();
// echo $user::DEFAULT_NUMBER;
// echo User::DEFAULT_NUMBER;
// var_dump($user);
// echo $user->name;
// echo $user->email;
// echo $user->getName();


//Phạm vi
// - private: Chỉ dùng trong nội bộ class
// - protected: Dùng trong lớp kế thừa
// - public: Dùng công khai
<?php
//Class Model: Dùng để thao tác với Database (Chung chung)
//Khi áp dụng với 1 bảng cụ thể -> Rõ hành vi

//Đặc điểm:
// - Class trực tiếp không được dùng trực tiếp (Không thể khởi tạo instance)
// - Bắt buộc phải kế thừa -> Sau đó khởi tạo instance từ class kế thừa
// - Phương thức trừu tượng chỉ tồn tại khi có class trừu tượng, không được phép triển khai phương thức trừu tượng trong class trừu tượng (Chỉ được phép khai báo)
// - Phương thức trường tượng chỉ được phép sử dụng protected, public

// abstract class Model
// {
//     protected string | null $table = null;

//     const DEFAULT_CONFIG = 1;

//     public function __construct()
//     {
//         $this->table = $this->table ?? strtolower(get_class($this) . 's');
//     }

//     abstract protected function attributes();

//     public function findAll()
//     {
//         return 'findAll';
//     }

//     public function getTable()
//     {
//         return $this->table;
//     }
// }

// class User extends Model
// {
//     protected function attributes()
//     {
//         return [
//             'id',
//             'name',
//             'email'
//         ];
//     }
// }

// $user = new User();
// echo $user->findAll();
// echo $user->getTable();
// echo $user::DEFAULT_CONFIG;

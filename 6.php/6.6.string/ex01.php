<?php 
// $fullname = 'Hoàng An';
// $fullname[0] = 'T';
// echo $fullname;

//Hàm xử lý

//1. Lấy độ dài
// $a = 'Ân';
// echo mb_strlen($a, 'UTF-8');

//2. Kiểm tra 1 chuỗi con trong 1 chuỗi cha
// $str = 'Học PHP không PHP khó';
// var_dump(mb_strpos($str, 'PHP')); //Lấy index đầu tìm được
// var_dump(mb_strripos($str, 'PHP')); //Lấy index cuối tìm được

//3. Cắt chuỗi
// $str = 'Học PHP không khó';
// echo mb_substr($str, 1, 5);
// echo mb_substr($str, 1);
// echo mb_substr($str, -5);

// echo mb_strstr($str,'PHP');

//4. Thay thế
// $str = 'Học PHP không PHP khó';
// echo str_replace('PHP', 'JS', $str);

//5. Chuyển chuỗi thành mảng
// $str = 'Tạ Hoàng An';
// $arr = explode(' ' , $str);
// print_r($arr);

//6. Loại bỏ khoảng trắng đầu và cuối chuỗi
// $str = ' HOÀNG AN  ';
// var_dump(trim($str));

// $url = "/https://unicode.vn/";
// echo trim($url, '/');

// $url = "/https://unicode.vn/";
// echo ltrim($url, '/');

//7. Chuyển đổi hoa, thường
// $str = 'ân ọc PHP Ân không PHP khó';
// echo mb_strtolower($str);
// echo mb_strtoupper($str);
// echo mb_ucfirst($str);
// function mb_ucwords($str, $encoding = "UTF-8") {
//     return mb_convert_case($str, MB_CASE_TITLE, $encoding);
// }
// echo mb_ucwords($str);

//8. Hàm mã hóa
// $password = '123456';
// echo md5($password);
// echo sha1($password);
// echo password_hash($password, PASSWORD_BCRYPT);
// var_dump(password_hash('12345', PASSWORD_BCRYPT) == password_hash('12345', PASSWORD_BCRYPT));

// $hash = password_hash('123456', PASSWORD_BCRYPT);
// var_dump(password_verify($password, $hash));

//9. Hàm tạo chuỗi ngẫu nhiên
// echo md5(uniqid());

//10. Tạo chuỗi đệm dựa vào độ dài
//1:30
// $number = 10;
// echo str_pad($number, 2, 0, STR_PAD_LEFT);

//11. str_repeat()
// $a = '*';
// echo str_repeat($a, 10);

// $email = 'hoangan.web@gmail.com';
// $start = 3;
// $end = 4;
// $length = strlen($email);
// $newEmail = substr($email, 0, $start).str_repeat('*', $length - $start - $end).substr($email, 0 - $end);
// echo $newEmail;
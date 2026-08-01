<?php 
/*
string (text values)
int (whole numbers)
float (decimal numbers)
bool (true or false)
array (multiple values)
object (stores data as objects)
null (empty variable)
resource (references external resources)
*/

// $a = "An";
// var_dump(is_string($a));

// $a = 10;
// var_dump(is_int($a));

// $a = 10.1;
// var_dump(is_float($a));

// $a = true;
// var_dump(is_bool($a));

// $a = [1,2,3,false];
// var_dump(is_array($a));
// var_dump($a);
// print_r($a);

// class MyClass {
//     public $name = 'An';
// }
// $myObj = new MyClass;
// print_r($myObj);
// var_dump(is_object($myObj));

// $myObj = new stdClass();
// $myObj->name = 'An';
// var_dump($myObj);

// $myObj = (object)['name' => 'An', 'email' => 'an@gmail.com'];
// var_dump($myObj);

// $a = null;
// var_dump(is_null($a));

// $curl = curl_init();
// var_dump($curl);

// $file = fopen('./data.txt', 'r');
// var_dump($file);

//Cách ép kiểu trong PHP
//(tenkieu) dulieu

// $a = "5";
// var_dump((int)$a);

//Falsy: "", 0, null, false, []
// var_dump((bool)[]);

//Làm sao để kiểm tra 1 biến tồn tại
// $a = null;
// if (isset($a)) {
//     echo 'Tồn tại';
// } else if (is_null($a)) {
//     echo 'Đang bị null';
// } else {
//     echo 'Không tồn tại';
// }
// if (array_key_exists('a', get_defined_vars())) {
//    echo 'Đã tồn tại';
// } else {
//     echo 'Chưa tồn tại';
// }

//empty: Kiểm tra 1 biến có bị trống không?
//không tồn tại, 0, [], "", false, null
// $a = 0;
// if (!empty($a) || $a == 0) {
//     echo 'Biến $a đã tồn tại và có dữ liệu';
// } else {
//     echo 'Không tồn tại hoặc không có dữ liệu';
// }
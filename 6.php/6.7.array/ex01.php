<?php
//Tạo mảng
// $myArr = [1,2,3];
// print_r($myArr);
// $myArr = [
//     'name' => 'An',
//     'email' => 'hoangan.web@gmail.com'
// ];
// print_r($myArr);

// $myArr = [
//     'name' => 'An',
//     'email' => 'hoangan.web@gmail.com',
//     1,2,3
// ];
// print_r($myArr);
// echo $myArr['email'];
// echo $myArr['0'];

// $myArr = [];

//Thêm dữ liệu vào mảng
// $myArr[] = 'An';
// $myArr[] = 'Dũng';
// $myArr[] = 'Tùng';

// $myArr['name'] = 'Hoàng An';
// $myArr['age'] = 34;
// $myArr['history'] = [];
// $myArr['history'][] = 'Dev';
// $myArr['history'][] = 'Teacher';
// echo $myArr['history'][1];

//Cập nhật
// $myArr[0] = 'Hoàng An';

//Xóa
// unset($myArr[1]);

// print_r($myArr);

//Duyệt qua từng phần tử
// $users = [
//     'An', 'Dũng', 'Đạt', 'Huân'
// ];
// for ($i = 0; $i < count($users); $i++) {
//     echo $users[$i]."\n";
// }

// $users = [
//     'name' => 'An',
//     'email' => 'hoangan.web@gmail.com',
//     'age' => 34
// ];
// foreach ($users as $key => $value) {
//     echo $key." - ".$value."\n";
// }

// $myArr = "An";
// if (is_array($myArr)) {
//     echo count($myArr);
// } else {
//     echo "Không phải là mảng";
// }

//Kiểm tra phần tử nằm trong mảng => in_array()
// $myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
// var_dump(in_array('Item 31', $myArr));

//Kiểm tra phần tử nằm trong mảng => Trả về index, key đầu tiên
// $myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
// var_dump(array_search('Item 31', $myArr));

//Sắp xếp lại index của mảng hoặc chuyển từ dạng assoc thành index => array_values()
// $myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'abc' => 'OK chưa?'];
// unset($myArr[1]);
// print_r($myArr);

// $newArr = array_values($myArr);
// print_r($newArr);

//Lấy key của mảng ban đầu => Tạo thành mảng mới => array_keys()
// $myArr = [
//     'name' => 'An',
//     'email' => 'hoangan.web@gmail.com',
//     'abc' //index = 0
// ];

// $keys = array_keys($myArr);
// print_r($keys);

//Lấy phần tử đầu tiên của mảng => reset()
// $myArr = [
//     'name' => 'An',
//     'email' => 'hoangan.web@gmail.com',
//     'abc' //index = 0
// ];
// echo reset($myArr);

//Lấy phần tử cuối cùng
// $myArr = [
//     'name' => 'An',
//     'email' => 'hoangan.web@gmail.com',
//     'abc' //index = 0
// ];
// echo end($myArr);

//Tìm phần tử trong mảng và trả về index cuối cùng
// $myArr = ['Item 1', 'Item 3', 'Item 2', 'Item 3', 'Item 4'];
// $keys = array_keys($myArr, 'Item 3');
// echo end($keys);

//Kiểm tra 1 key có tồn tại trong array hay không?
// $myArr = [
//     'name' => 'An',
//     // 'email' => null,
//     'abc' //index = 0
// ];
// if (!empty($myArr['email'])) {
//     echo 'key email tồn tại và có dữ liệu';
// }
// if (array_key_exists('email', $myArr)) {
//     echo 'key email tồn tại';
// }
// echo $myArr['email'];

//Gộp nhiều mảng thành 1 mảng
// $arr1 = [1,2,3];
// $arr2 = ['Item 1', 'Item 2', 'Item 3'];
// $arr3 = [true, false, null];
// $newArr = array_merge($arr1, $arr2, $arr3);
// var_dump($newArr);

//Thêm phần tử vào cuối mảng => array_push()
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// $result = array_push($myArr, 'New 1', 'New 2', 'New 3');
// print_r($myArr);
// print_r($result);

//Thêm phần tử vào đầu mảng => array_unshift()
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// $result = array_unshift($myArr, 'New 1', 'New 2', 'New 3');
// print_r($myArr);
// print_r($result);

//Xóa phần tử cuối mảng => array_pop()
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// $value = array_pop($myArr);
// print_r($myArr);
// echo $value;

//Xóa phần tử đầu mảng => array_shift()
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// $value = array_shift($myArr);
// print_r($myArr);
// echo $value;

//Lấy key ngẫu nhiên
// $myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
// $keyRandom =  array_rand($myArr, 2);
// print_r($keyRandom);

//Đảo ngược mảng => array_reverse()

// $myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
// $newArr = array_reverse($myArr);
// print_r($newArr);
// print_r($myArr);

//Sắp xếp
// $numbers = [5, 2, 9, 1, 8, 10];
// sort($numbers, SORT_NUMERIC);
// print_r($numbers);

// $names = [
//     'Dũng',
//     'An',
//     'Đạt',
//     'Nguyên',
//     'Bình'
// ];
// usort($names, function ($a, $b) {
//     // return mb_strlen($a) - mb_strlen($b);
//     //Từ nào có độ dài nhỏ hơn đứng trước
//     if (mb_strlen($a) < mb_strlen($b)) {
//         return -1;
//     }
//     if (mb_strlen($a) > mb_strlen($b)) {
//         return 1;
//     }

//     if (mb_strlen($a) == mb_strlen($b)) {
//         if ($a < $b) {
//             return -1;
//         }
//         if ($a > $b) {
//             return 1;
//         }
//     }
// });
// print_r($names);

/*
usort($array, function($a, $b) {
    // Chỉ cần trả lời câu hỏi: Bạn muốn thằng nào đứng TRƯỚC ở mảng MỚI?
    if ( Bạn muốn $a đứng trước $b ) {
        return -1; // Số âm = $a lên trước
    }
    if ( Bạn muốn $b đứng trước $a ) {
        return 1;  // Số dương = $a ra sau (đồng nghĩa $b lên trước)
    }
    return 0; // Bằng nhau
});
*/

//Destructuring
// $names = ['name' => 'An', 'hoangan.web@gmail.com', 35];
// list($name, $email) = $names;
// echo $name . "\n";
// echo $email . "\n";

// [$name, $email] = $names;
// echo $name . "\n";
// echo $email . "\n";

// $user = [
//     'name' => 'An',
//     'email' => 'an@gmail.com',
//     'age' => 34
// ];

// ['email' => $email, 'name' => $fullname] = $user;
// echo $fullname . "\n";
// echo $email . "\n";

//Spread
// $oldArr = ['a' => 'Item 1', 'b' => 'Item 2', 'c' => 'Item 3'];
// $newArr = [1, 2, 3, ...$oldArr];
// print_r($newArr);

// function sum(...$args)
// {
//     print_r($args);
// }
// sum(1, 2, 3, 4);

// function sum($a, $b)
// {
//     echo $a . "\n";
//     echo $b . "\n";
// }
// $values = [10, 20];
// sum(...$values);

//Tạo mảng từ khoảng number
// $numbers = range(1, 100, 5);
// print_r($numbers);

//Cắt mảng
// $myArr = ['User 1', 'User 2', 'User 3', 'User 4'];
// $newArr = array_slice($myArr, -2);
// print_r($newArr);

// $users = [
//     [
//         'name' => 'User 1',
//         'email' => 'user1@gmail.com',
//         'age' => 20
//     ],
//     [
//         'name' => 'User 2',
//         'email' => 'user2@gmail.com',
//         'age' => 35
//     ],
//     [
//         'name' => 'User 3',
//         'email' => 'user3@gmail.com',
//         'age' => 28
//     ]
// ];

//Bài toán: Lấy ra email của user có age = 35
// $ageArr = array_column($users, 'age');
// $index = array_search(35, $ageArr);
// if ($index !== false) {
//     echo $users[$index]['email'];
// }

// $myArr = [
//     'name' => 'An',
//     'email' => '',
//     'status' => false,
//     'age' => null,
//     'abc' => 0
// ];
// $newArr = array_filter($myArr, fn($value) => !is_null($value));
// var_dump($newArr);

// $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// $result = array_filter($numbers, fn($value) => $value % 2 === 0);
// print_r($result);

// $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// $result = array_find($numbers, fn($value) => $value % 2 == 0);
// echo $result;

// $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// $newArr = array_map(fn($item) => $item * 2, $numbers);
// print_r($newArr);

// $arr1 = [5, 2, 9, 1, 8];
// $arr2 = [3, 9, 6, 5];
// //Result: [9,5]
// $result = array_reduce($arr1, function ($carry, $item) use ($arr2) {

//     if (in_array($item, $arr2)) {
//         array_push($carry, $item);
//     }
//     return $carry;
// }, []);
// print_r($result);

$myArr = ['User 1', 'User 2', 'User 3', 'User 4'];
array_splice($myArr, 1, 2, ['A', 'B', 'C']);
print_r($myArr);

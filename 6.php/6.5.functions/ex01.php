<?php 

// if (!function_exists('getMessage')) {
//     function getMessage($msg, $type = "success") {
//         echo 'Hello anh em: '.$msg.$type;
//     }
// }

// getMessage("Unicode");

//named arguments
// function doSomething($a = 0, $b = 0, $c = 0) {
//     echo "a = $a \n";
//     echo "b = $b \n";
//     echo "c = $c \n";
// }
// doSomething(c: 10);

// function doSomething() {
//     return;
// }
// var_dump(doSomething());

//expression function
// $showMessage = function() {
//     echo 'Hello anh em';
// };
// $showMessage();

//arrow function
// $sum = fn($a, $b) => $a + $b;
// echo $sum(10, 20);

//callback function
// function display($callback) {
//     $callback();
// }

// function handler() {
//     echo 'Hello';
// }
// display(function(){
//     echo 'Hello';
// });

// display('handler');

//Biến toàn cục, biến cục bộ
// $a = 10;
// function getData() {
//     global $a;
//     $b = 20;
//     echo $a;
// }
// getData();

//Closure
// $a = 10;
// function display() {
//     $b = 20;
//     return function() use ($b) {
//         // global $a, $b;
//         // echo $a;
//         echo $b;
//     };
//     // function showResult() {
//     //     echo $b;
//     // }
//     // return showResult;
// }
// $func = display();
// $func();

// $a = 10;
// function display($callback) {
//    $callback();
// }

// function showResult() {
//     global $a;
//     $b = 20;
//     display(function() use ($a, $b) {
//         echo $a. "\n";
//         echo $b;
//     });
// }
// showResult();

//Tham chiếu, tham trị
// $a = 10;
// $b = &$a;
// $b = 20;
// echo "a = $a \n";
// echo "b = $b \n";

// $myArr = ['Item 1', 'Item 2'];
// function addData(&$arr, $value) {
//     $arr[] = $value;
// }

// addData($myArr, 'Item 3');
// print_r($myArr);

//arr.push('value');
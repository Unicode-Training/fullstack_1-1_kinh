<?php
// header('Content-Type: text/plain'); //Trả về response header
// header('Content-Type: application/json');
// http_response_code(201);
// echo 'abc'; //Trả về response body
// $users = [
//     'name' => 'An',
//     'email' => 'an@gmail.com'
// ];
// echo json_encode($users);

//Tình huống đặc biệt
// - Chuyển hướng: Trả về response code là 301, 302, trả về header Location
// - Set cookie từ phía Server: 

// header("Location: https://google.com");
// http_response_code(301);

// header("Set-Cookie: name=an;path=/;max-age=3600;httponly");

// $allHeaders = getallheaders();
// $cookie = $allHeaders['Cookie'];
// echo $cookie;

// setcookie('token', 'ahihi123', time() + 3600, '/', "", false, true);  // --> Response header Set-Cookie

// echo '<pre>';
// print_r($_COOKIE); // --> Đọc request header Cookie -> Chuyển thành array
// echo '</pre>';

<?php
require './core/Database.php';

$db = new Database();
// $db->getQuery("p", [
//     'An Unicode',
//     'an.unicode@gmail.com',
//     password_hash('123456', PASSWORD_DEFAULT)
// ]);

// $users = $db->getQuery("SELECT * FROM users")->fetchAll(PDO::FETCH_ASSOC);
// echo '<pre>';
// print_r($users);
// echo '</pre>';

// $user = $db->getQuery("SELECT * FROM users WHERE id = ?", [1])->fetch(PDO::FETCH_ASSOC);
// echo '<pre>';
// print_r($user);
// echo '</pre>';

$user = $db->create('users', [
    'name' => 'Hoàng',
    'email' => 'hoang@gmail.com',
    'password' => password_hash('123456', PASSWORD_DEFAULT),
    'status' => true
]);

if ($user) {
    $phone = $db->create('phones', [
        'phone' => '01111',
        'user_id' => $user->id
    ]);
    var_dump($phone);
}

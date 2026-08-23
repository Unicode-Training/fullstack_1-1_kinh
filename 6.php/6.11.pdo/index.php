<?php
require './core/Database.php';
require './core/DB.php';

// $db = new Database();
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

// $user = $db->create('users', [
//     'name' => 'Hoàng',
//     'email' => 'hoang@gmail.com',
//     'password' => password_hash('123456', PASSWORD_DEFAULT),
//     'status' => true
// ]);

// if ($user) {
//     $phone = $db->create('phones', [
//         'phone' => '01111',
//         'user_id' => $user->id
//     ]);
//     var_dump($phone);
// }


//Update
// - Điều kiện sửa (Sửa bản ghi nào?)
// - Dữ liệu cần sửa
// $sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
// $result = $db->getQuery($sql, [
//     'Hoàng 123',
//     'hoangan123@gmail.com',
//     5
// ]);
// $sql = "UPDATE users SET name = :name, email = :email WHERE id = :id";
// $result = $db->getQuery($sql, [
//     'name' => 'Hoàng 1234',
//     'email' => 'hoangan1234@gmail.com',
//     'id' => 5
// ]);
// var_dump($result);
// $db = new Database();
// $result = $db->update('users', ['id', '=', ':id'], [
//     'name' => 'Hoàng 111',
//     'email' => 'hoangan111@gmail.com',
//     'id' => 5
// ]);
// echo '<pre>';
// print_r($result);
// echo '</pre>';

// $emailCount = $db->getQuery("SELECT count(id) FROM users WHERE email = ?", ['hoangan@gmail.com'])->fetch();
// if ($emailCount[0] > 0) {
//     echo "Bị trùng";
// } else {
//     echo "Không trùng";
// }


// $db->delete("phones", [
//     "user_id",
//     "=",
//     ":user_id"
// ], [
//     'user_id' => 5
// ]);
// $result = $db->delete("users", ["id", "=", ":id"], [
//     'id' => 5
// ]);
// var_dump($result);

// $users = DB::where('id', '<=', 3)
//     ->orWhere('id', '=', 5)
//     ->table('users')
//     ->get();
// echo '<pre>';
// print_r($users);
// echo '</pre>';

// $newUser = DB::table('users')->create([
//     'name' => "Hello",
//     'email' => 'hello@gmail.com',
//     'password' => password_hash('123456', PASSWORD_DEFAULT)
// ]);
// echo '<pre>';
// print_r($newUser);
// echo '</pre>';

// $user = DB::table('users')->where('id', ' = ', 3)->update([
//     'name' => 'Ok chưa?',
//     'email' => 'okok@gmail.com'
// ]);
// echo '<pre>';
// print_r($user);
// echo '</pre>';

$user = DB::table('users')->where('id', '=', 3)->delete();
echo '<pre>';
print_r($user);
echo '</pre>';

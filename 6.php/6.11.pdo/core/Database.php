<?php
class Database
{
    private $conn = null;
    public function __construct()
    {
        $dsn = "mysql:host=127.0.0.1;port=3307;dbname=fullstack_kinh_01;charset=utf8";
        try {
            $this->conn = new PDO($dsn, 'root', '123456');
        } catch (PDOException $exception) {
            echo $exception->getMessage();
        }
    }

    public function getQuery(string $sql, array $data = [])
    {
        try {
            $statement = $this->conn->prepare($sql); //Nạp câu lệnh sql
            $statement->execute($data); //truyền dữ liệu thay thế các dấu ? và thực thi
            return $statement;
        } catch (PDOException $exception) {
            var_dump($exception->getMessage());
            return false;
        }
    }

    public function createRaw(string $table, array $data = [])
    {


        /*
        [name] => Kính
        [email] => kinh@gmail.com
        [password] => $2y$12$/FsvD95yeneSkguJCBZl3eEW9RQM/BCNac14gr1xglZEOgLO26172
        [status] => 1

        INSERT INTO users(name, email, password, status) VALUES (:name, :email, :password, :status)
        */
        $keys = array_keys($data);
        $fields = implode(',', $keys);
        $values = ":" . implode(', :', $keys);
        $sql = "INSERT INTO $table($fields) VALUES($values)";

        $statement = $this->getQuery($sql, $data);
        if (!$statement) {
            return false;
        }

        //Lấy id vừa insert
        $lastId = $this->conn->lastInsertId();
        $statement = $this->getQuery("SELECT * FROM $table WHERE id = ?", [$lastId]);

        if (!$statement) {
            return false;
        }
        $record = (object)$statement->fetch(PDO::FETCH_ASSOC);

        return $record;
    }

    public function updateRaw(string $table, array | null $condition = null, array $data = [])
    {

        //UPDATE users SET name = :name, email = :email WHERE id = :id
        $conditionString = "";
        $condtionArrray = [];
        if (!empty($condition)) {
            $conditionField = $condition[0];
            $condtionArrray = [
                $conditionField => $data[$conditionField]
            ];
            unset($data[$conditionField]);
            $conditionString = "WHERE " . implode(' ', $condition);
        }

        $keys = array_keys($data);
        $keysMap = array_map(function ($value) {
            return $value . " = :" . $value;
        }, $keys);
        $setString = implode(', ', $keysMap);

        $sql = "UPDATE $table SET $setString $conditionString";

        $statement = $this->getQuery($sql, [
            ...$data,
            ...$condtionArrray
        ]);
        if (!$statement) {
            return false;
        }

        $statement = $this->getQuery("SELECT * FROM $table $conditionString", $condtionArrray);

        if (!$statement) {
            return false;
        }

        $record = (object)$statement->fetch(PDO::FETCH_ASSOC);

        return $record;
    }

    public function deleteRaw(string $table, array | null $condition = [], array $data = [])
    {
        //DELETE FROM users WHERE id = :id
        $conditionString = "WHERE " . implode(' ', $condition);
        $sql = "DELETE FROM $table $conditionString";
        $record = $this->getQuery("SELECT * FROM $table $conditionString", $data)->fetch();
        $statement = $this->getQuery($sql, $data);
        if (!$statement) {
            return false;
        }
        return (object)$record;
    }
}


//Client -> Driver -> DB Server

//Quy trình làm việc
// - Tạo statement (Prepare)
// - Binding data (Thay thế vào các dấu ?)
// - Execute

//Với các thao tác thêm sửa xóa:
// prepare -> execute(data) -> Không phải lúc nào cũng có data. Chỉ cần thêm data khi câu lệnh sql có dấu ?, :tenbatky

//Với các thao tác lấy dữ liệu về (SELECT * FROM)
//prepare -> execute(data) -> fetchAll hoặc fetch

//Tìm hiểu
// - sửa, xóa PDO
// - Transaction
// - Build Query builder
// - Tư duy: Migration, Seeders

//DB::where()->get()

//Ví dụ Transaction

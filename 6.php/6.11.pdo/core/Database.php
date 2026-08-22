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
            return false;
        }
    }

    public function create(string $table, array $data = [])
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
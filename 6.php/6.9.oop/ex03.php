<?php
// class User
// {
//     private function handleSum1(int $a, int $b)
//     {
//         return $a + $b;
//     }

//     private function handleSum2(int $a, int $b, int $c)
//     {
//         return $a + $b + $c + 5;
//     }

//     private function getMessageString(string $msg)
//     {
//         return $msg;
//     }

//     private function getMessageNumber(int $value)
//     {
//         return $value + 10;
//     }

//     public function __call(string $name, array $arguments)
//     {
//         //Đóng vai trò để điều hướng việc gọi hàm  
//         if ($name == "sum") {
//             $count = count($arguments);
//             if ($count === 2) {
//                 return $this->handleSum1(...$arguments);
//             }

//             if ($count === 3) {
//                 return $this->handleSum2(...$arguments);
//             }
//         }


//         if ($name == "getMessage") {
//             [$value] = $arguments;
//             if (is_string($value)) {
//                 return $this->getMessageString($value);
//             }

//             if (is_numeric($value)) {
//                 return $this->getMessageNumber($value);
//             }
//         }
//     }

//     // public static function __callStatic($name, $arguments)
//     // {
//     //     throw new \Exception('Not implemented');
//     // }
// }

// $user = new User();
// echo $user->sum(10, 20) . "<br/>";
// echo $user->sum(10, 20, 30) . "<br/>";
// echo $user->getMessage("An") . '<br/>';
// echo $user->getMessage(10);

//User::where()->orderBy()->take(5)->skip(1)->get()
//User::skip(1)->where()->orderBy()->take(5)->get()

class User
{
    private static object | null $instance = null;
    private $query = [
        "select" => "*",
        "from" => "users"
    ];
    public function __construct()
    {
        echo 'Khởi tạo instance<br/>';
    }

    private function where(string $field, string $compare, string | number $value)
    {
        $this->query["where"] = [
            $field,
            $compare,
            "'$value'"
        ];
        return $this;
    }
    private function orderBy(string $field, string $order)
    {
        $this->query['orderBy'] = [
            $field,
            $order
        ];
        return $this;
    }
    private function get()
    {
        $sql = 'SELECT ' . $this->query['select'] . ' FROM ' . $this->query['from'];
        if (!empty($this->query["where"])) {
            $sql .= " WHERE " . implode(" ", $this->query["where"]);
        }
        if (!empty($this->query['orderBy'])) {
            $sql .= " ORDER BY " . implode(' ', $this->query['orderBy']);
        }
        $this->resetQuery();
        return $sql;
    }

    private function resetQuery()
    {
        $this->query = [
            "select" => "*",
            "from" => "users"
        ];
    }

    public static function __callStatic(string $name, array $arguments)
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance->$name(...$arguments);
    }

    public function __call(string $name, array $arguments)
    {
        return $this->$name(...$arguments);
    }
}

// $user = new User();
// echo $user->orderBy('id', 'desc')->where('name', '=', 'An')->get();

echo User::where('email', 'like', '%an@gmail.com%')->orderBy('id', 'desc')->get() . '<br/>';
echo User::get() . '<br/>';

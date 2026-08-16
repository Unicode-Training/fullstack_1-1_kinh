<?php
//Traits

//trait A: a1, a2, a3
//class B: b1, b2, b3

// trait QueryBuilder
// {
//     public function __construct()
//     {
//         echo 'QueryBuilder construct <br/>';
//     }

//     public function where()
//     {
//         echo "where<br/>";
//     }
// }

// trait ORM
// {
//     use QueryBuilder;
//     // public function __construct()
//     // {
//     //     echo 'ORM construct <br/>';
//     // }
//     public function create(array $data): void
//     {
//         echo 'create with: ' . json_encode($data);
//     }
// }

// class Database
// {
//     // use QueryBuilder;
//     use ORM;

//     // public function __construct()
//     // {
//     //     echo 'Database construct <br/>';
//     // }

//     public function where(string $field)
//     {
//         echo 'abc ' . $field . '<br/>';
//     }
//     public function findAll()
//     {
//         $this->where('an');
//         echo "findAll";
//     }
// }

// $db = new Database();
// $db->findAll();
// $db->create(['name' => 'An']);

class Model
{
    private $data = [];
    private $tempData = [];
    private $query = [];
    private static object | null $instance = null;
    private function saveInstance(array $data)
    {
        $this->data = $data;
    }
    public function create(array $data)
    {
        echo "Create with: " . json_encode($data) . '<br/>';
        $this->saveInstance($data);
    }

    public function save()
    {
        $this->data = $this->tempData;
        $this->tempData = [];
    }

    public function __get(string $name)
    {
        return $this->data[$name] ?? null;
    }

    public function __set(string $name, mixed $value)
    {
        $this->tempData[$name] = $value;
    }

    public function __call(string $name, array $arguments)
    {
        if ($name === "notify" && !method_exists($this, 'notify')) {
            throw new Error("Hãy gọi trait Notifiable trong model " . get_class($this));
        }

        if ($name === 'get' || $name === "where") {
            return $this->$name(...$arguments);
        }
    }

    public static function __callStatic(string $name, array $arguments)
    {
        if ($name === 'where' || $name === "get") {
            if (!self::$instance) {
                self:
                self::$instance = new self();
            }
            return self::$instance->$name(...$arguments);
        }
    }

    private function where(string $field, string $compare, string $value)
    {
        $this->query[] = [
            $field,
            $compare,
            $value
        ];
        return $this;
    }

    private function get()
    {
        return $this->query;
    }
}
trait Notifiable
{
    public function notify()
    {
        echo "Gửi thông báo tới: : " . $this->email . '<br/>';
    }
}
class User extends Model
{
    use Notifiable;
}

// $user = new User();
// $user->create(['name' => 'An', 'email' => 'hoangan.web@gmail.com']);
// $user->notify();

//Design Pattern

// $user = new User();
// $user->name = 'An';
// $user->email = 'an@gmail.com';
// $user->isVerified = false;
// $user->save();

// var_dump($user->isVerified);

$id = 1;
$query = User::where('name', '=', 'An');

if ($id > 0) {
    $query->where('id', '>', $id);
}

$query2 = clone $query;


$keyword = 'an@gmail.com';

if ($keyword !== '') {
    $query2->where('email', '=', $keyword);
    echo "Query 2: <br/>";
    echo "<pre>";
    print_r($query2->get());
    echo "</pre>";

    echo "Query 1: <br/>";
    $query = $query->get();
    echo "<pre>";
    print_r($query);
    echo "</pre>";
}

//Namespace
//Composer
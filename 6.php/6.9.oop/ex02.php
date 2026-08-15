<?php
//Kế thừa
// class User
// {
//     protected string $name;
//     protected string $email;
//     protected string | null $table = null;
//     public function __construct(string $name, string $email)
//     {
//         $this->name = $name;
//         $this->email = $email;
//         if (!$this->table) {
//             $this->table = strtolower(get_class($this));
//         }
//     }

//     public function getTable()
//     {
//         return $this->table;
//     }
// }

// class Customer extends User
// {
//     private int $age;
//     public function __construct(string $name, string $email, int $age)
//     {
//         parent::__construct($name, $email); //Gọi construct của cha
//         $this->age = $age;
//     }
    
//     public function getName()
//     {
//         return $this->name;
//     }

//     public function getAge()
//     {
//         return $this->age;
//     }
// }

// class Partner extends Customer
// {
//     // protected string $name = "Guest";
//     // protected string $table = 'products';

//     public function __construct(string $name, string $email, int $age)
//     {
//         parent::__construct($name, $email, $age);
//         // $this->name = "Guest";
//     }

//     public function getEmail()
//     {
//         return $this->email;
//     }

//     public function getParterName()
//     {
//         return $this->name;
//     }


//     public function getName()
//     {
//         return 'Hello em: ' . parent::getName();
//     }
// }

// $partner = new Partner("An", 'an@gmail', 30);
// echo $partner->getName();
// echo $partner->getTable();
// echo $partner->getEmail();
// echo $partner->getParterName();
// echo $partner->getName();

// $customer = new Customer("An", "An@gmail.com", 30);
// echo $customer->name;
// echo $customer->getName();
// echo $customer->getAge();

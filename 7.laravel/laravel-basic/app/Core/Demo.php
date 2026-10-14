<?php

namespace App\Core;

use App\Services\AttributeService;

class Demo
{
    public function __construct(private AttributeService $attribute, private string $value) {}
    public function doSomething()
    {
        return [
            'doSomething',
            $this->attribute->findAll()[0],
            $this->value
        ];
    }
}

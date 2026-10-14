<?php

namespace App\Services;

use App\Services\AttributeService;

class ProductService
{
    public function __construct(private AttributeService $attributeService) {}
    public function findAll()
    {
        return [
            'products' => ['Product 1', 'Product 2', 'Product 3'],
            'attributes' => $this->attributeService->findAll()
        ];
    }
}

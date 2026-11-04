<?php

namespace App\Services;

use App\Models\Product;

class ProductService
{
    public function findAll()
    {
        return Product::latest()->paginate(10);
    }

    public function create(array $data)
    {
        return Product::create($data);
    }

    public function updateStatus(int $id, string $status)
    {
        $product = Product::find($id);
        $product->update(['status' => $status]);
        return $product;
    }
}

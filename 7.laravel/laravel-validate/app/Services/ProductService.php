<?php

namespace App\Services;

use App\Models\Product;

class ProductService
{
    public function findAll()
    {
        $limit = config('general.products.limit', 10);
        $product = Product::latest();
        $s = request('s');
        $status = request('status');
        if (in_array($status, ['PUBLISH', 'DRAFT'])) {
            $product->where('status', $status);
        }
        if ($s) {
            $product->where(function ($query) use ($s) {
                $query->where('name', 'like', "%$s%")
                    ->orWhere('description', 'like', "%$s%");
            });
        }
        return $product->paginate($limit);
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

    public function find(int $id)
    {
        $product = Product::find($id);
        if (!$product) {
            abort(404);
        }
        return $product;
    }

    public function update(int $id, array $data)
    {
        $product = $this->find($id);
        $product->update($data);
        return $product;
    }

    public function delete(int $id)
    {
        $product = $this->find($id);
        $product->delete();
        return $product;
    }

    public function deleteMany(array $ids)
    {
        Product::destroy($ids);
    }
}

<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function __construct(private ProductService $productService) {}

    public function findAll()
    {
        return $this->productService->findAll();
    }

    public function find(int $id)
    {
        return $this->productService->find($id);
    }

    public function create(Request $request)
    {
        //$request->name;
        //$request->price;
        //$request->all()
        return $this->productService->create($request->all());
    }

    public function update(int $id)
    {
        return $this->productService->update($id);
    }

    public function delete(int $id)
    {
        return $this->productService->delete($id);
    }

    public function restore(int $id)
    {
        return $this->productService->restore($id);
    }
}

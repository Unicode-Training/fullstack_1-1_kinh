<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreRequest;
use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct(private ProductService $productService) {}
    public function index()
    {
        $products = $this->productService->findAll();
        return view('products.index', compact('products'));
    }

    public function create()
    {
        return view('products.create');
    }

    public function store(ProductStoreRequest $request)
    {
        $this->productService->create($request->getValidatedData());
        return redirect()->route('products.index')->with([
            'msg' => 'Create product success',
            'type' => 'success'
        ]);
    }

    public function updateStatus(int $id, Request $request)
    {
        $allowed = ['DRAFT', 'PUBLISH'];
        if (!in_array($request->status, $allowed)) {
            return response()->json([
                'success' => false,
                'message' => 'Status invalid'
            ], 400);
        }
        $this->productService->updateStatus($id, $request->status);

        return response()->json([
            'success' => true,
            'message' => 'Update status success'
        ]);
    }
}

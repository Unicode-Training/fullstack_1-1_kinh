<?php

namespace App\Http\Controllers;

use App\Core\Demo;
use App\Services\ProductService;

class HomeController extends Controller
{

    public function __construct(private ProductService $productService) {}

    public function index(Demo $demo)
    {
        $title = '<i>Hello anh em</i>';
        $products = $this->productService->findAll();
        // dd($demo->doSomething());
        return view('home', compact('title', 'products'));
    }
}

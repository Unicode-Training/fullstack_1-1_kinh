<?php

namespace App\Services;

use App\Models\Product;

class ProductService
{
    public function findAll()
    {
        // return Product::all(['name', 'price', 'status']);
        // return Product::orderBy('created_at', 'desc')->take(2)->skip(1)->get();
        // return Product::where('name', 'like', '%m 3%')
        //     ->get();
        // return Product::where('name', 'like', '%m 2%')->orWhere('description', 'like', '%m 2%')->where('status', true)->toSql();
        // return Product::where('status', true)
        //     ->where(function ($query) {
        //         $query->where('name', 'like', '%m 2%')
        //             ->orWhere('description', 'like', '%m 2%');
        //     })->get();
        // return Product::select('status', DB::raw('COUNT(*) as status_count'))->groupBy('status')->get();
        // return Product::select('status')
        //     ->selectRaw('COUNT(*) as status_count')
        //     ->groupBy('status')
        //     ->havingRaw('COUNT(*) > ?', [2])
        //     ->get();
        return Product::latest()->paginate(3);
    }

    public function find(int $id)
    {
        // $product = Product::select('name', 'price', 'status')->find($id);
        $product = Product::where('name', 'Sản phẩm 1')->select('id', 'name', 'price')->first();
        if (!$product) {
            //throw
            // throw new NotFoundHttpException('Product Not Found');
            // abort(403, 'Không có quyền');
            abort(404, 'Product Not Found'); //throw
        }
        return $product;
    }

    public function create(array $data)
    {
        //Gọi model
        return Product::create($data);

        // return Product::insert($data);

        // $product = new Product();
        // $product->name = $data['name'];
        // $product->price = $data['price'];
        // $product->status = $data['status'];
        // $product->description = $data['description'];
        // $product->save();
    }

    public function update(int $id)
    {
        // return Product::where('id', $id)->update($data);
        // $product = Product::find($id);
        // $product->update($data);
        // return $product;

        $request = request();
        $product = Product::find($id);

        // if ($request->name) {
        //     $product->name = $request->name;
        // }

        // if ($request->price) {
        //     $product->price = $request->price;
        // }

        // if ($request->description) {
        //     $product->description = $request->description;
        // }

        // if ($request->status) {
        //     $product->status = $request->status;
        // }

        $product->fill($request->all());

        $product->save();
        return $product;
    }

    public function delete(int $id)
    {
        $product = Product::find($id);
        $product->delete();
        return $product;
    }

    public function restore(int $id)
    {
        return Product::onlyTrashed()->find($id)->forceDelete();
        // return Product::onlyTrashed()->get();
        // 
    }
}

//Ví dụ:
//SELECT * FROM products WHERE (name LIKE '%abc%' OR description LIKE '%abc%') AND status=1
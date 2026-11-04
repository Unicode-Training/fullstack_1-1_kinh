@extends('layouts.main')
@section('content')
<h1 class="mb-3 font-medium text-3xl">Products</h1>
<a href="{{route('products.create')}}" class="inline-block bg-green-600 mb-3 px-3 py-1 text-white">Add</a>
<div class="relative bg-neutral-primary-soft shadow-xs border border-[#ddd] rounded-base overflow-x-auto">
    <table class="w-full text-body text-sm text-left rtl:text-right">
        <thead class="bg-neutral-secondary-soft border-[#ddd] border-b rounded-base text-body text-sm">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    <input type="checkbox" />
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                   Status
                </th>
                <th scope="col" class="px-6 py-3 w-[15%] font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach ($products as $product)
            <tr class="bg-neutral-primary border-[#ddd] border-b">
                <th scope="row" class="px-6 py-4">
                    <input type="checkbox" />
                </th>
                <td class="px-6 py-4">
                    {{$product->name}}
                </td>
                <td class="px-6 py-4">
                    {{number_format($product->price)}}đ
                </td>
                <td class="px-6 py-4">
                    <label class="switch">
                    <input type="checkbox" class="js-status" data-id="{{$product->id}}" value="publish" @checked($product->status === 'PUBLISH')/>
                    <span class="slider"></span>
                    </label>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="bg-yellow-800 px-3 py-1 text-white">Edit</a>
                    <a href="#" class="bg-red-800 px-3 py-1 text-white">Delete</a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>

@endsection
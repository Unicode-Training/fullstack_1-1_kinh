@extends('layouts.main')
@section('content')
<h1 class="mb-3 font-medium text-3xl">Create product</h1>
<form method="post">
    <div class="mb-3">
        <label for="" class="block mb-2 font-medium">Name</label>
        <input type="text" name="name" class="px-3 py-1 border border-[#ddd] outline-none w-full" placeholder="Name..." value="{{old('name')}}"/>
        @error('name')
            <span class="block text-red-600">{{$message}}</span>
        @enderror
    </div>
    <div class="mb-3">
        <label for="" class="block mb-2 font-medium">Price</label>
        <input type="number" name="price" class="px-3 py-1 border border-[#ddd] outline-none w-full" placeholder="Price..." value="{{old('price')}}"/>
         @error('price')
            <span class="block text-red-600">{{$message}}</span>
        @enderror
    </div>
    <div class="mb-3">
        <label for="" class="block mb-2 font-medium">Sale Price</label>
        <input type="number" name="sale_price" class="px-3 py-1 border border-[#ddd] outline-none w-full" placeholder="Sale Price..." value="{{old('sale_price')}}"/>
        @error('sale_price')
            <span class="block text-red-600">{{$message}}</span>
        @enderror
    </div>
    <div class="mb-3">
        <label for="" class="block mb-2 font-medium">Description</label>
        <textarea name="description" class="px-3 py-1 border border-[#ddd] outline-none w-full h-50" placeholder="Description...">{{old('description')}}</textarea>
        @error('description')
            <span class="block text-red-600">{{$message}}</span>
        @enderror
    </div>
    <div class="mb-3">
        <label class="switch">
        <input type="checkbox" name="status" value="publish" @checked(old('status'))/>
        <span class="slider"></span>
        </label>
        @error('status')
            <span class="block text-red-600">{{$message}}</span>
        @enderror
    </div>
    <div class="flex gap-3">
        <button class="bg-green-600 px-3 py-1 rounded-lg text-white">Save</button>
        <a href="{{route('products.index')}}" class="bg-red-600 px-3 py-1 rounded-lg text-white">Cancel</a>
    </div>
</form>
@endsection
<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function create()
    {
        return view('users.create');
    }

    public function store(UserStoreRequest $request)
    {

        // $data = $request->validate([
        //     'name' => 'required',
        //     'email' => 'required|email|unique:users,email',
        //     'password' => 'required|min:6',
        //     'confirm_password' => 'required|min:6|same:password'
        // ], [
        //     'required' => ':attribute bắt buộc phải nhập',
        //     'email' => ':attribute không phải định dạng email',
        //     'min' => ':attribute phải từ :min ký tự',
        //     'same' => ':attribute không giống :other',
        //     'unique' => ':attribute đã tồn tại. Vui lòng nhập giá trị khác'
        // ], [
        //     'name' => 'Tên',
        //     'email' => 'Email',
        //     'password' => 'Mật khẩu',
        //     'confirm_password' => 'Nhập lại mật khẩu'
        // ]);

        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);

        User::create($data);

        return back()->with('msg', 'Thêm thành công');
    }
}

//required: Bắt buộc phải nhập
//email: Kiểm tra định dạng email
//min:value -> Độ dài từ value ký tự
//max:value -> Độ dài lớn nhất
//same:tentruong -> Giống
//unique:tenbang,tencot -> Kiểm tra tồn tại trong database
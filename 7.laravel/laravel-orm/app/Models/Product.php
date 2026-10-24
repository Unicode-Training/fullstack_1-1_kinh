<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
    //Tên bảng -> Tự suy luận (Chuyển tên model thành chữ thường + thêm s)
    protected $table = 'products';

    //Tên cột muốn cập nhật dữ liệu -> Tránh lỗi bảo mật mass assignment
    protected $fillable = ['name', 'price', 'status', 'description'];
}

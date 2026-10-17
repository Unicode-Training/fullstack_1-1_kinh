# Laravel

## Controller

php artisan make:controller TenFileController

## Blade

1. Parse data

```
{{tenbien}} --> Tự động chuyển html thành entity

{!!tenbien!!} --> Giữ nguyên html (Cân nhắc)
```

2. Câu lệnh (Giống php)

```
@if (dieukien)
HTML
@else
HTML
@endif
```

```
@for ()
HTML
@endfor
```

```
@foreach ()
HTML
@endforeach
```

```
@while ()
HTML
@endwhile
```

3. Subview: Gọi 1 view khác vào view đang chạy

```
@include(duong-dan)
```

4. Raw PHP: Viết logic php trong file blade (Hạn chế dùng)

```
@php
Logic
@endphp
```

## Dependency Injection

Controller -> Service 1 -> Service 2 -> Service 3

1. Gọi Service vào trong Controller

Khai báo trực tiếp tên class của Service vào method (action), `__construct()` -> Tự động inject (Tiêm)

2. Gọi Service vào Service

- Khai báo trực tiếp tên class của Service vào `__construct()` -> Tự động inject (Tiêm)

Lưu ý: Các class mặc định của Laravel: Request -> Gọi tương tự

## Tạo Provider

php artisan make:provider TenProvider

## Chạy migrate

php artisan migrate

## Tạo Migration

php artisan make:migration ten-file

## Rollback migrate

php artisan migrate:rollback --step={number}

## Reset migrate

php artisan migrate:reset --> Xóa hết các bảng

## Refresh migrate

php artisan migrate:refresh

## Fresh migrate

php artisan migrate:fresh

## Nguyên tắc khi viết migration

- Tên rõ ràng
- Luôn tạo file migration mới khi thay đổi
- Chú ý đến hàm down (test)

## Seeders

php artisan db:seed

## Tạo file seeder

php artisan make:seeder TenFile

## Cache

1. Xóa cache view

php artisan view:clear

## Quy trình khi xây dựng 1 chức năng với Laravel

- Tạo Controller -> Tạo action
- Tạo Service
- Đăng ký route
- Kiểm tra trong Database có Table chưa? -> Chưa có tạo file migration -> Định nghĩa cột -> Chạy lệnh migrate
- Code logic trong file Service
- Gọi Service vào Controller
- Tạo file view (blade)
- Gọi file blade vào Controller
- Truyền các biến dữ liệu sang view
- Viết logic hiển thị bên view

## Auto deploy

- cd /home/unicode.vn
- git pull origin main
- composer install
- php artisan migrate
- service php-fpm restart

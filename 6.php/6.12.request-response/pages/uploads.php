<?php
//Đơn vị
//1kb = 1024 byte
//1mb = 1024 kb
if (!empty($_FILES['image'])) {

    $name = $_FILES['image']['name'];
    $size = $_FILES['image']['size']; //byte
    $tmpPath = $_FILES['image']['tmp_name'];
    // echo $_FILES['image']['type'] . '<br/>';

    //Tạo tên file mới
    $filename = md5(uniqid());
    $fileInfo = pathinfo($name);
    $ext = $fileInfo['extension'];

    $newFile = $filename . '.' . $ext;

    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $realMimeType = finfo_file($finfo, $tmpPath);

    $allowedMime = [
        'image/jpg',
        'image/png',
        'image/gif',
        'image/jpeg'
    ];

    if (!in_array($realMimeType, $allowedMime)) {
        echo 'Định dạng không được phép';
        exit;
    }

    $maxSize = 1; //5MB

    $sizeMb = $size / 1024 / 1024;

    if ($sizeMb > $maxSize) {
        echo 'Dung lượng chỉ được tối đa ' . $maxSize . ' MB';
        exit;
    }

    //moving
    // $storageDir = __DIR__ . '/../storage';
    // $status = move_uploaded_file($tmpPath, $storageDir . '/' . $newFile);
    // var_dump($status);
}

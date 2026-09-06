<?php
// header('Content-Type: image/png');
// $filename = "anh-vua-tao.png";
// header('Content-Disposition: attachment; filename="' . $filename . '"');
// header('Pragma: no-cache');
// header('Expires: 0');


// $image = imagecreatetruecolor(300, 100);

// $blue = imagecolorallocate($image, 0, 123, 255);
// $white = imagecolorallocate($image, 255, 255, 255);

// imagefill($image, 0, 0, $blue);

// imagestring($image, 5, 50, 40, 'Hello from PHP!', $white);

// imagepng($image);

// imagedestroy($image);


header('Content-Type: image/png');
header('Content-Disposition: attachment; filename="anh-watermark.png"');
header('Pragma: no-cache');
header('Expires: 0');

$source_file = __DIR__ . '/../image-source/banner-affiliate-unicode.png';
$watermark_file = __DIR__ . '/../image-source/logo.png';

// 2. Tạo đối tượng hình ảnh từ file nguồn (Giả định ảnh gốc là JPEG, logo là PNG)
$source = imagecreatefrompng($source_file);
$watermark = imagecreatefrompng($watermark_file);

// Thay đổi cấu hình để giữ độ trong suốt (alpha) của logo PNG
imagealphablending($source, true);
imagesavealpha($source, true);

// 3. Lấy kích thước của ảnh gốc và ảnh logo
$source_width = imagesx($source);
$source_height = imagesy($source);

$watermark_width = imagesx($watermark);
$watermark_height = imagesy($watermark);

//Resize lại ảnh watermark mới
$watermark_resized = imagecreatetruecolor(100, 30); //100px x 50px
imagealphablending($watermark_resized, false);
imagesavealpha($watermark_resized, true);

imagecopyresampled(
    $watermark_resized,
    $watermark,
    0,
    0,
    0,
    0,
    100,
    30,
    $watermark_width,
    $watermark_height
);

// 4. Tính toán tọa độ đặt logo (Ví dụ: Cách mép phải và mép dưới 10 pixel)
$margin_right = 10;
$margin_bottom = 10;

$dst_x = $source_width - 100 - $margin_right;
$dst_y = $source_height - 30 - $margin_bottom;

imagefilter($watermark_resized, IMG_FILTER_COLORIZE, 0, 0, 0, 90);

// 5. Đè ảnh logo lên ảnh gốc
// Sử dụng imagecopy() để giữ nguyên độ trong suốt (transparency) gốc của logo PNG
imagecopy($source, $watermark_resized, $dst_x, $dst_y, 0, 0, 100, 30);

// 6. Xuất ảnh ra trình duyệt hoặc lưu lại tệp

imagepng($source, null); // Xuất trực tiếp ra trình duyệt với chất lượng 90%

//PHP: GD Image -> Chuyên xử lý ảnh

//Luồng xây dựng chức năng upload ảnh -> watermark
// - Upload file lên -> save vào /storage
// - Quét ảnh trong storage -> đóng dấu (DB: Lưu tiến trình để đánh dấu ảnh nào đã được xử lý)
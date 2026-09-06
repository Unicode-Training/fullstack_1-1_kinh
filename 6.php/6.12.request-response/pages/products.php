<?php
//Lấy tất cả header
$headers = getallheaders();
$contentType = $headers['Content-Type'] ?? "";
$authorization = $headers['Authorization'] ?? "";
$authorizationArr = explode(' ', $authorization);
$token = end($authorizationArr);
$rawBody = file_get_contents('php://input');
$body = null;
if ($contentType === "application/json") {
    //Xử lý khi client gửi lên bằng json
    $body = json_decode($rawBody, true);
}

if ($contentType === "application/x-www-form-urlencoded") {
    parse_str($rawBody, $body);
}

if (strpos($contentType, 'multipart/form-data') !== false) {
    $body = $_POST;
}
?>
<h1>Products</h1>
<p>Từ khóa: <?php echo $_GET['q'] ?? ''; ?></p>
<p>Trạng thái: <?php echo $_GET['status'] ?? ''; ?></p>
<p>User Agent: <?php echo $headers['User-Agent']; ?></p>
<p>Mehod: <?php echo $_SERVER['REQUEST_METHOD']; ?></p>
<p>Body:</p>
<?php
echo '<pre>';
print_r($body);
echo '</pre>';
?>
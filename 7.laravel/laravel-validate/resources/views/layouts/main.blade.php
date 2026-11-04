<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicode</title>
    @vite("resources/css/app.css")
</head>
<body>
    <div class="mx-auto py-5 max-w-300">
        @yield('content')
    </div>
    <script>
        const msg = "{{session('msg')}}";
        const type = "{{session('type')}}";
    </script>
    @vite("resources/js/app.js")
</body>
</html>
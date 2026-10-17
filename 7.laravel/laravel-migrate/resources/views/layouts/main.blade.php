<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        @vite('resources/css/app.css')
        @vite('resources/js/app.js')
    </head>
    <body>
        <header class="container">
            <h2>Logo</h2>
        </header>
        <main>
            @yield('content')
        </main>
         <header>
            <h2>Footer</h2>
        </header>
        @yield('js')
    </body>
</html>

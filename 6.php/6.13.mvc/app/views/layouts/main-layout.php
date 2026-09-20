<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle ?? 'Unicode'; ?></title>
</head>

<body>
    <header>
        <h2>Header</h2>
        <?php
        if (!empty($_SESSION['user_login'])):
        ?>
            <p>Chào: <?php echo $_SESSION['user_login']->name; ?></p>
            <p><a href="#" class="logout">Đăng xuất</a></p>
            <form method="post" class="logout-form" action="/logout"></form>
        <?php
        else:
        ?>
            <p><a href="/login">Đăng nhập</a></p>
            <p><a href="/register">Đăng ký</a></p>
        <?php
        endif;
        ?>
    </header>
    <main>
        {body}
    </main>
    <footer>
        <h2>Footer</h2>
    </footer>

    <script src="/assets/app.js"></script>
</body>

</html>
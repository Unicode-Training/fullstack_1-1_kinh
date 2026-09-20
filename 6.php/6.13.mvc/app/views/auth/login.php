<h1>Login</h1>
<?php echo $msg ?? null; ?>
<form method="post">
    <div>
        <label for="">Email</label>
        <input type="email" name="email" required placeholder="Email..." />
    </div>
    <div>
        <label for="">Password</label>
        <input type="password" name="password" required placeholder="Password..." />
    </div>
    <button>Login</button>
</form>
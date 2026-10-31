@if (session('msg'))
<div style="color: green">{{session('msg')}}</div>
@endif
<form method="post" action="/users">
    <div>
        <label>Name</label>
        <input type="text" name="name" placeholder="Name..." />
        @error('name')
        <span style="color: red">{{$message}}</span>
        @enderror
    </div>
    <div>
        <label>Email</label>
        <input type="text" name="email" placeholder="Email..." />
        @error('email')
        <span style="color: red">{{$message}}</span>
        @enderror
    </div>
    <div>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password..." />
        @error('password')
        <span style="color: red">{{$message}}</span>
        @enderror
    </div>
    <div>
        <label>Confirm Password</label>
        <input type="password" name="confirm_password" placeholder="Confirm Password..." />
        @error('confirm_password')
        <span style="color: red">{{$message}}</span>
        @enderror
    </div>
    <button>Submit</button>
</form>
<script>
    const form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = Object.fromEntries(formData.entries());
        const response = await fetch("/users", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log(data);
    
        
    });
</script>

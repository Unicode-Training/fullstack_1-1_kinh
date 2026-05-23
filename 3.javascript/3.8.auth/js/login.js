const form = document.querySelector('form');
const msgEl = document.querySelector('.msg');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const data = await login(email, password);
    if (!data) {
        msgEl.innerText = 'Email hoặc mật khẩu không chính xác';
        return;
    }
    localStorage.setItem('access_token', data.accessToken);
    localStorage.setItem('refresh_token', data.refreshToken);
    window.location.href = './index.html';
})

const login = async (email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        if (!response.ok) {
            throw new Error("Email hoặc password không hợp lệ")
        }
        return response.json();
    } catch {
        return false;
    }
}
const actionEl = document.querySelector('.acttion');
const getProfile = async () => {

    try {
        const response = await httpClient(`${BASE_URL}/profile/me`);

        if (!response.ok) {
            throw new Error("Unathorize");
        }
        const data = await response.json();
        actionEl.innerHTML = `
        <h2>Chào: ${data.user.fullName}</h2>
        <button>Logout</button>
        `
    } catch {
        actionEl.innerHTML = `<a href="#">Đăng ký</a>
      <a href="./login.html">Đăng nhập</a>`;
    }
}

actionEl.addEventListener('click', (e) => {
    if (e.target.localName === 'button') {
        logout();
    }

});

const logout = async () => {
    const accessToken = localStorage.getItem('access_token');
    try {
        await httpClient(`${BASE_URL}/auth/logout`, {
            method: 'POST',
        })
    } finally {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        getProfile();
    }
}

getProfile();
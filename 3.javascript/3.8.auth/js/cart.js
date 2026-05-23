const getCartList = async () => {
    const accessToken = localStorage.getItem('access_token');
    try {
        const response = await httpClient(`${BASE_URL}/shopping-cart`);
        if (!response.ok) {
            throw new Error("Unathorize");
        }
        const data = await response.json();
        renderCartTable(data);
    } catch {
        window.location.href = './login.html'
    }
}

const renderCartTable = ({ items, total }) => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = items.map((item, index) => {
        return `<tr>
          <td>${index + 1}</td>
          <td>${item.name}</td>
          <td>${item.price.toLocaleString()} đ</td>
          <td>${item.quantity}</td>
          <td>${item.total.toLocaleString()} đ</td>
          <td align="center"><button data-id="${item.productId}">Delete</button></td>
        </tr>`;
    }).join('');
}

const addEventDelete = () => {
    const tbody = document.querySelector('tbody');
    tbody.addEventListener('click', async (e) => {
        if (e.target.localName === "button") {
            const productId = e.target.dataset.id;
            const { success, code } = await deleteProduct(productId);
            if (success) {
                getCartList();
            } else {
                if (code === 401) {
                    window.location.href = './login.html';
                } else {
                    alert('Bạn không thể xóa lúc này')
                }
            }
        }
    })
}

const deleteProduct = async (productId) => {
    try {
        const response = await httpClient(`${BASE_URL}/shopping-cart/${productId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            const err = new Error("Error");
            err.status = response.status;
        }
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            code: error.status
        }
    }
}

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

getProfile();

getCartList();

addEventDelete();
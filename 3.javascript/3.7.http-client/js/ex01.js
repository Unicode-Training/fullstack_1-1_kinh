//Request (http client) --> backend --> Response
//http client:
// - phần mềm nào đó
// - trình duyệt
// - server

//Browser
//xhr: XMLHttpRequest
//fetch: Hiện đại hơn, cú pháp ngắn hơn, tự động trả về Promise

//Những thông tin cần phải nắm được khi gọi lên backend
// - URL là gì?
// - Method là gì?
// - Có header hay không?
// - Có authentication (Xác thực) hay không?

//Note: Khi fetch api bắt buộc phải có
// - data hoặc status trả về từ api
// - loading: Trạng thái khi api chưa có dữ liệu
// - error: Thông báo lỗi nếu gọi api thất bại


const baseURL = 'https://api.escuelajs.co/api/v1';
const getProducts = async () => {
    setLoading(true);
    try {
        const response = await fetch(`${baseURL}/products`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        //1. Lấy data từ server (Dạng text)
        //2. Parse text (json) --> array, object
        // const products = JSON.parse(data);
        renderProducts(data);
    } catch (error) {
        setError(error.message);
    }
};
const setLoading = (isShow = true) => {
    const productListEl = document.querySelector('.js-product-list');
    productListEl.innerHTML = isShow ? `<div class="text-center py-3">
        Loading...
    </div>`: '';
}
const setError = (message) => {
    const productListEl = document.querySelector('.js-product-list');
    productListEl.innerHTML = `<div class="text-center py-3">
        ${message}
    </div>`;
}
const renderProducts = (data) => {
    const productListEl = document.querySelector('.js-product-list');
    productListEl.innerHTML = data.map(product => `<div class="px-3 mb-3 w-1/3">
          <div class="border border-[#ddd] p-2">
            <h2 class="text-xl">${product.title}</h2>
            <p class="py-2">Category: ${product.category.name}</p>
            <p>Price: ${product.price}</p>
            <div class="flex mt-3 gap-3">
                <button class="js-edit-btn px-1 py-1 bg-yellow-700 text-sm text-white cursor-pointer" data-id="${product.id}">Sửa</button>
                 <button class="js-delete-btn px-1 py-1 bg-red-700 text-sm text-white cursor-pointer" data-id="${product.id}">Xóa</button>
            </div>
          </div>
        </div>`).join('')
}

//Create product
const addFormEventSubmit = () => {
    const formEl = document.querySelector('form');
    const msgEl = document.querySelector('.js-msg');
    const submitBtn = formEl.querySelector('button');
    formEl.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(formEl);
        const productBody = Object.fromEntries(formData.entries());
        submitBtn.disabled = true;
        submitBtn.innerText = 'Đang lưu...';
        const status = await createProduct(productBody);
        submitBtn.disabled = false;
        submitBtn.innerText = 'Lưu thay đổi';
        if (!status) {
            msgEl.innerText = 'Không thể thêm sản phẩm lúc này hoặc thiếu thông tin';
        } else {
            getProducts(); //Làm mới dữ liệu
            formEl.reset(); //reset form
        }
    })
}

const createProduct = async (productBody) => {
    try {
        const response = await fetch(`${baseURL}/products`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...productBody,
                categoryId: 1,
                images: ["https://placehold.co/600x400"]
            })
        });
        if (!response.ok) {
            throw new Error("Failed to create product");
        }
        return true;
    } catch {
        return false;
    }
}

const addEventEditAndDelete = () => {
    const productListEl = document.querySelector('.js-product-list');
    productListEl.addEventListener('click', async (e) => {
        if (e.target.classList.contains("js-edit-btn")) {
            //Nút sửa
            const productId = e.target.getAttribute('data-id');
            const product = await getProductById(productId);
            if (!product) {
                return alert('Lỗi khi lấy thông tin sản phẩm');
            }
            updateDataToForm(product);
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
        }
    })
}
const updateDataToForm = (data) => {
    const formEl = document.querySelector('form');
    // console.dir(formEl);
    // console.log(data);
    const fields = ['title', 'price', 'description'];
    fields.forEach((field) => {
        formEl.elements[field].value = data[field];
    })
}
const getProductById = async (productId) => {
    try {
        const response = await fetch(`${baseURL}/products/${productId}`);
        if (!response.ok) {
            throw new Error("Failed to get product by id")
        }
        const data = await response.json();
        return data;
    } catch {
        return false;
    }

}
addEventEditAndDelete();
addFormEventSubmit();
getProducts();
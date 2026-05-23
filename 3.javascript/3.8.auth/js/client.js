let refreshTokenPromise = null;
const httpClient = async (url, options = {}) => {
    //Xử lý thêm token
    const accessToken = localStorage.getItem('access_token');
    const allHeaders = new Headers(options.headers || {})
    if (accessToken) {
        //Thêm vào header
        //- Lấy tất cả header hiện tại của request

        //- Thêm header Authorization
        allHeaders.set(`Authorization`, `Bearer ${accessToken}`);
    }

    const response = await fetch(url, {
        ...options,
        headers: allHeaders
    });

    //Check response

    if (response.status === 401) {
        if (!refreshTokenPromise) {
            refreshTokenPromise = getNewToken()
        }
        const newToken = await refreshTokenPromise;
        refreshTokenPromise = null;
        if (newToken) {
            localStorage.setItem('access_token', newToken.accessToken);
            localStorage.setItem('refresh_token', newToken.refreshToken);
            return httpClient(url, options);
        } else {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
        }
    }

    return response;
}

const getNewToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token')
    try {
        const response = await fetch(`${BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                refreshToken
            })
        });
        if (!response.ok) {
            throw new Error("Unauthorize");
        }
        return response.json();
    } catch {
        return false;
    }
}

//fetch wrapper

//refresh token
//1. check response của request --> 401
//2. gọi api refresh token
//- trả về được token mới --> lưu vào localStorage --> gọi request bị 401 ở trên
//- báo lỗi 401 --> logout

//Refresh token rotation

//Login --> access 1 + refresh 1
//Refresh token --> Dùng refresh 1 gửi lên backend --> Tạo token mới --> Thu hồi refresh 1
import axios from "axios";
import { env } from "../configs/env";
import { getNewToken } from "../utils/auth";
export const axiosInstance = axios.create({
    baseURL: env.BACKEND_URL
})
let refreshTokenPromise: null | Promise<{ accessToken: string, refreshToken: string }> = null;
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

axiosInstance.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    if (error.status === 401 && window.location.pathname !== '/dang-nhap') {
        if (!refreshTokenPromise) {
            refreshTokenPromise = getNewToken();
        }
        const newToken = await refreshTokenPromise;
        if (newToken) {
            localStorage.setItem('accessToken', newToken.accessToken);
            localStorage.setItem('refreshToken', newToken.refreshToken);
            return axiosInstance(error.config); //Gọi lại request bị failed
        }
    }
    return Promise.reject(error);
})
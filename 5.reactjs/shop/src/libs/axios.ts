import axios from "axios";
import { env } from "../configs/env";
export const axiosInstance = axios.create({
    baseURL: env.BACKEND_URL
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
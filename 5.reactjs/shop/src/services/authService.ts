import { axiosInstance } from "../libs/axios";

export const login = async (email: string, password: string) => {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
}

export const profile = async () => {
    try {
        const response = await axiosInstance.get('/profile/me');
        return response.data.user;
    } catch {
        return false;
    }
}
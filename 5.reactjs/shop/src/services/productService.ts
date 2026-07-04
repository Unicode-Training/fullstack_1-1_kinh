import { axiosInstance } from "../libs/axios";

export const getDealToday = async (limit: number) => {
    try {
        const response = await axiosInstance.get('/products?dealToday=true&limit=' + limit);
        const data = response.data;
        return data.products;
    } catch {
        return false;
    }
}

export const getProductsByCategory = async (categoryId: string, limit: number) => {
    try {
        const response = await axiosInstance.get('/products?category=' + categoryId + '&limit=' + limit);
        const data = response.data;
        return data.products;
    } catch {
        return false;
    }
}
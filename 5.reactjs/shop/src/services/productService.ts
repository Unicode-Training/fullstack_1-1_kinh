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

export const getProductDetail = async (productId: string) => {
    try {
        const response = await axiosInstance.get(`/products/${productId}`);
        const { data } = response;
        return data.product;
    } catch {
        return false;
    }
}

export const getReviewsProduct = async (productId: string) => {
    try {
        const response = await axiosInstance.get(`/products/${productId}/reviews`);
        return response.data;
    } catch {
        return false;
    }
}
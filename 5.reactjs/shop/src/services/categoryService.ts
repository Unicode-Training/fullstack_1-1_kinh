import { axiosInstance } from "../libs/axios"

export const getCategoriesList = async () => {
    try {
        const response = await axiosInstance.get(`/categories`);
        const data = response.data;
        return data.categories;
    } catch {
        return false;
    }
}
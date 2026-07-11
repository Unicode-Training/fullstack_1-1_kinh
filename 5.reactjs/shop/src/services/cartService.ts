import { axiosInstance } from "../libs/axios";

export const addToCart = async (quantity: number, productId: string) => {
    await axiosInstance.post(`/shopping-cart`, {
        quantity,
        productId
    })
}
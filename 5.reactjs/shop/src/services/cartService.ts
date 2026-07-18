import { axiosInstance } from "../libs/axios";

export const addToCart = async (quantity: number, productId: string) => {
    await axiosInstance.post(`/shopping-cart`, {
        quantity,
        productId
    })
}

export const getShoppingCarts = async () => {
    try {

        const response = await axiosInstance.get('/shopping-cart');
        return {
            ...response.data,
            totalQuantity: response.data.items.reduce((acc: number, item: { quantity: number }) => (acc + item.quantity), 0)
        };
    } catch {
        return false;
    }
}

export const deleteShoppingCart = async (productId: string) => {
    await axiosInstance.delete(`/shopping-cart/${productId}`);
}

export const updateShoppingCart = async (productId: string, quantity: number) => {
    await axiosInstance.patch(`/shopping-cart/${productId}`, {
        quantity
    });
}
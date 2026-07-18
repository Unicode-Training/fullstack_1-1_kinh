import { create } from "zustand";
import { getShoppingCarts } from "../services/cartService";
type CartStore = {
    quantity: number;
    setCart: (newQuantity: number) => void,
    fetchCart: () => Promise<void>
}
export const useCartStore = create<CartStore>((set) => {
    return {
        quantity: 0,
        setCart(newQuantity: number) {
            set({ quantity: newQuantity })
        },
        async fetchCart() {
            const carts = await getShoppingCarts();
            set({ quantity: carts.totalQuantity })
        }
    }
});
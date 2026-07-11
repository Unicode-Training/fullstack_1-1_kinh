import { create } from "zustand";
type User = {
    id: string,
    fullName: string,
    email: string,
}
type Store = {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User,
    setUser: (data: User) => void,
    removeUser: () => void
}
export const useAuthStore = create<Store>((set) => {
    return {
        isAuthenticated: false,
        isLoading: true,
        user: {} as User,
        setUser(data: User) {
            set({
                user: data,
                isAuthenticated: true,
                isLoading: false
            })
        },
        removeUser() {
            set({
                user: {} as User,
                isLoading: false,
                isAuthenticated: false
            })
        }
    }
})
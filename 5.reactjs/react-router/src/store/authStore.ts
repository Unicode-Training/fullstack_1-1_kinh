//Lưu trữ các state liên quan đến Auth, share toàn bộ ứng dụng
//Cách hoạt động của zustand -> Tạo custom hook (Hàm bắt đầu bằng từ khóa use)

import { create } from 'zustand'
type User = {
    name: string;
}
type AuthStore = {
    logout: () => void,
    user: User,
    isAuthenticated: boolean
}
export const useAuthStore = create<AuthStore>((set) => {
    return {
        user: {
            name: 'Hoàng An'
        },
        isAuthenticated: true,
        logout: () => {
            set({
                user: {} as User,
                isAuthenticated: false
            })
        }
    }
})
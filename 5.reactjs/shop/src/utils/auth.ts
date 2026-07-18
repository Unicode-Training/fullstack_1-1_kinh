import { env } from "../configs/env";

export const saveToken = (token: { accessToken: string; refreshToken: string }) => {
    localStorage.setItem('accessToken', token.accessToken);
    localStorage.setItem('refreshToken', token.refreshToken);
}

export const getNewToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await fetch(`${env.BACKEND_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ refreshToken })
    });
    if (!response.ok) {
        return false;
    }
    const data = await response.json();
    return data;
}
export const saveToken = (token: { accessToken: string; refreshToken: string }) => {
    localStorage.setItem('accessToken', token.accessToken);
    localStorage.setItem('refreshToken', token.refreshToken);
} 
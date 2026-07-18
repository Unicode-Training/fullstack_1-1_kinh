export const debounce = <T>(callback: (...args: T[]) => void, timeout = 500) => {
    let timeoutId: number | null = null;
    return (...args: T[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            callback(...args);
        }, timeout);
    }
}
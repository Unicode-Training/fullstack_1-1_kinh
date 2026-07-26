import type { ProductAdd } from "@/types/product.type";

export const getProductList = async (q: string = '') => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products?title=${q}`);
    if (!response.ok) {
        throw new Error("Fetch to failed")
    }
    return response.json();
}

export const getProductBySlug = async (slug: string) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/slug/${slug}`);
    if (!response.ok) {
        throw new Error("Fetch to failed")
    }
    return response.json();
}

export const addProduct = async (newProduct: ProductAdd) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...newProduct,
            "categoryId": 1,
        })
    });
    if (!response.ok) {
        throw new Error("Failed when create product")
    }
    return response.json();
}

export const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`https://api.escuelajs.co/api/v1/files/upload`, {
        method: 'POST',
        body: formData
    });
    if (!response.ok) {
        throw new Error("Failed when upload image")
    };
    return response.json();
}
export type Product = {
    id: number;
    title: string;
    slug: string;
    price: number;
    images: string[],
    description: string;
}

export type ProductAdd = {
    title: string;
    price: number;
    description: string;
}
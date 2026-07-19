export type Product = {
    _id: string;
    name: string;
    image: string;
    price: number;
    gallery: string[];
    description: string;
    avgRating: number;
    brand: string;
    reviewCount: number;
    priceDiscount: number;
}

export type Review = {
    title: string;
    comment: string;
    createdAt: string;
    rating: number;
    user: {
        email: string;
        userId: string;
    }
}

export type RatingStat = {
    count: number;
    percent: number;
    star: number;
}

export type ProductReview = {
    reviews: Review[],
    ratingStats: RatingStat[],
    total: number;
    avgRating: number;
}
import { create } from "zustand";
type RatingStore = {
    rating: number,
    setRating: (value: number) => void
}
export const useRatingStore = create<RatingStore>((set) => {
    return {
        rating: 0,
        setRating(value: number) {
            set({ rating: value })
        }
    }
})
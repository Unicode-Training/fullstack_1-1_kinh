import clsx from "clsx";
import { Star, StarHalf } from "lucide-react";
import { useRatingStore } from "../../store/ratingStore";

type Props = {
  value: number;
  canReviews?: boolean;
  size?: "default" | "medium" | "large" | "small";
  onClick?: (value: number) => void;
};
export default function RatingStar({
  value,
  canReviews = true,
  size = "default",
  onClick,
}: Props) {
  const sizeMap = {
    default: "18px",
    small: "14px",
    medium: "20px",
    large: "24px",
  };
  const { setRating } = useRatingStore();
  const handleClickStar = (value: number) => {
    if (canReviews) {
      onClick?.(value);
      setRating(value);
    }
  };
  return (
    <div className="flex gap-1 items-center">
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        if (index <= value) {
          return (
            <Star
              onClick={() => handleClickStar(index)}
              key={index}
              fill="#FFD700"
              color="#FFD700"
              size={sizeMap[size]}
              className={clsx(
                "cursor-pointer",
                canReviews && "hover:fill-amber-600 hover:text-amber-600",
              )}
            />
          );
        } else if (value >= index - 0.5 && value < index) {
          return (
            <div className="relative w-4.5 h-4.5" key={index}>
              <StarHalf
                onClick={() => handleClickStar(index)}
                fill="#FFD700"
                color="#FFD700"
                size={sizeMap[size]}
                className={clsx(
                  "cursor-pointer absolute top-0 left-0 z-1",
                  canReviews && "hover:fill-amber-600 hover:text-amber-600",
                )}
              />
              <Star
                onClick={() => handleClickStar(index)}
                fill="#ccc"
                color="#ccc"
                size={sizeMap[size]}
                className={clsx(
                  "cursor-pointer absolute top-0 left-0",
                  canReviews && "hover:fill-amber-600 hover:text-amber-600",
                )}
              />
            </div>
          );
        }
        return (
          <Star
            onClick={() => handleClickStar(index)}
            key={index}
            fill="#ccc"
            color="#ccc"
            size={sizeMap[size]}
            className={clsx(
              "cursor-pointer",
              canReviews && "hover:fill-amber-600 hover:text-amber-600",
            )}
          />
        );
      })}
    </div>
  );
}

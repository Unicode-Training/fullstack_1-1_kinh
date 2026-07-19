import RatingStar from "./RatingStar";
import noAvatar from "../../assets/no-avatar.svg";
import { useEffect, useState } from "react";
import { getReviewsProduct } from "../../services/productService";
import type { ProductReview } from "../../types/product.type";
import moment from "moment";
type Props = {
  productId: string;
  onOpenReviewModal?: () => void;
};
export default function ProductReviews({
  productId,
  onOpenReviewModal,
}: Props) {
  const [productReviews, setReviews] = useState({
    reviews: [],
    ratingStats: [],
    total: 0,
    avgRating: 0,
  } as ProductReview);
  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getReviewsProduct(productId);
      setReviews(reviews);
    };
    fetchReviews();
  }, []);
  return (
    <div className="py-10 flex gap-5">
      <div className="w-70">
        <h3 className="text-xl mb-3">Customer Review</h3>
        <div className="flex gap-2 mb-3">
          <RatingStar
            value={productReviews.avgRating}
            onClick={onOpenReviewModal}
          />
          <span>{productReviews.avgRating} out of 5</span>
        </div>
        <span className="mb-3 block">
          {productReviews.total.toLocaleString()} global ratings
        </span>
        {[...productReviews.ratingStats.reverse()].map((item, index) => (
          <div className="flex gap-2 items-center py-2" key={index}>
            <span>{item.star} star</span>
            <progress
              className="flex-1 appearance-none [&::-webkit-progress-bar]:bg-slate-200 
         [&::-webkit-progress-value]:bg-[#FFD814] 
         [&::-moz-progress-bar]:bg-[#FFD814]"
              max="100"
              value={item.percent}
            ></progress>
            <span>{item.percent}%</span>
          </div>
        ))}

        <h3 className="text-xl mb-3">Review the Product</h3>
        <p className="mb-3">Share your thoughts with our customers</p>
        <button
          className="px-5 py-1 rounded-xl bg-white border border-[#ddd] cursor-pointer hover:bg-yellow-100"
          onClick={onOpenReviewModal}
        >
          Write a product review
        </button>
      </div>
      <div className="flex-1 px-5">
        {productReviews.reviews.map((review, index) => (
          <div className="mb-3" key={index}>
            <div className="flex gap-1 items-center mb-2">
              <img src={noAvatar} />
              <span>{review.user.email}</span>
            </div>
            <div className="mb-2 flex gap-2 items-center">
              <RatingStar
                value={review.rating}
                canReviews={false}
                size={"small"}
              />
            </div>
            <div className="mb-2 text-sm">
              {moment(review.createdAt).fromNow()}
            </div>
            <div>{review.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

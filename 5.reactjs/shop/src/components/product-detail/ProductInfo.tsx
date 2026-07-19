import { useState, type ChangeEvent } from "react";
import AddToCartButton from "../AddToCartButton";
import RatingStar from "./RatingStar";
type Props = {
  _id: string;
  name: string;
  price: number;
  brand: string;
  avgRating: number;
  reviewCount: number;
  priceDiscount: number;
  onOpenReviewModal?: () => void;
};
export default function ProductInfo({ onOpenReviewModal, ...product }: Props) {
  const getRatingDiscount = () => {
    if (!product.price || !product.priceDiscount) {
      return 0;
    }
    const value =
      ((product.price - product.priceDiscount) / product.price) * 100;
    return value.toFixed(0);
  };
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl">{product.name}</h1>
      <p className="text-lg">Brand: {product.brand}</p>
      <div className="flex gap-2 items-center">
        <span>{product.avgRating}</span>
        <RatingStar value={product.avgRating} onClick={onOpenReviewModal} />
        <span className="text-xs">{product.reviewCount} ratings</span>
      </div>
      <div className="h-px bg-[#ccc]"></div>
      {product.price ? (
        <>
          <div className="flex gap-5 items-center">
            <span className="text-[#CC0C39] text-xl font-medium">
              -${getRatingDiscount()}%
            </span>
            <span className="text-xl font-medium">
              {product.priceDiscount
                ? product.priceDiscount.toLocaleString()
                : product.price.toLocaleString()}
              đ
            </span>
          </div>
        </>
      ) : (
        <span className="text-xl font-medium text-red-600">Liên hệ</span>
      )}

      <div className="flex items-center gap-3">
        <span>Quantity:</span>
        <input
          type="text"
          className="px-1 py-1 w-15 outline-0 border border-[#ddd] text-center rounded-md"
          value={quantity}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuantity(+e.target.value)
          }
        />
      </div>
      <div>
        <AddToCartButton
          productId={product._id}
          quantity={quantity}
          className="px-5 py-2 bg-[#FA8900] text-white cursor-pointer rounded-full"
        >
          Add to cart
        </AddToCartButton>
      </div>
    </div>
  );
}

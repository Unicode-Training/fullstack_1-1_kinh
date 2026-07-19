import { Link } from "react-router-dom";
import type { Product } from "../types/product.type";
import { getProductLink } from "../utils/url";
import SafeImage from "./SafeImage";
import AddToCartButton from "./AddToCartButton";

type Props = {
  product: Product;
};
export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-[#D9D9D9] rounded-2xl overflow-hidden">
      <Link to={getProductLink(product._id)}>
        <SafeImage
          src={product.image}
          className="block h-47.5 w-full object-cover"
        />
      </Link>
      <div className="p-5">
        <h3 className="py-3">
          <Link to={getProductLink(product._id)}>{product.name}</Link>
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {product.price.toLocaleString()}đ
          </span>
          <AddToCartButton
            className="px-3 py-2 bg-[#7D7D7D] rounded-full cursor-pointer text-white"
            productId={product._id}
          >
            Add To Cart
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}

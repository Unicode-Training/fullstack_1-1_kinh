import "@aejkatappaja/phantom-ui";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getProductBySlug } from "../services/product.service";
import type { Product } from "../types/product.type";

export default function ProductDetail() {
  const { slug } = useParams();
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["products", slug],
    queryFn: () => getProductBySlug(slug!),
  });
  const navigate = useNavigate();
  return (
    <div className="max-w-300 mx-auto py-5">
      <button
        className="px-3 py-1 border border-[#ddd] mb-3"
        onClick={() => navigate("/products")}
      >
        Back
      </button>
      <phantom-ui loading={isLoading}>
        <div className="flex gap-3">
          <div className="w-1/2">
            <img src={product?.images[0]} alt="" className="mb-3" />
            <div className="flex gap-3">
              {product?.images.slice(1).map((item, index) => (
                <img key={index} src={item} className="w-25" />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl mb-3">{product?.title}</h1>
            <p className="py-3">Price: ${product?.price}</p>
            <p>{product?.description}</p>
          </div>
        </div>
      </phantom-ui>
    </div>
  );
}

import { useEffect, useState } from "react";
import type { Product } from "../../types/product.type";
import { getDealToday } from "../../services/productService";
import ProductCard from "../ProductCard";
export default function TodayDeal() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getDealToday(8);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <section className="py-10 bg-[#E6E5E5]">
      <div className="container">
        <h2 className="text-3xl font-bold">
          Today’s <span className="border-b-2 border-[#FF0000]">Deals</span>
        </h2>
        <div className="py-5 grid grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

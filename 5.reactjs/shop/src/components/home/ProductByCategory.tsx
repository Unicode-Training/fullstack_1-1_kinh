import { useEffect, useState } from "react";
import type { Product } from "../../types/product.type";
import { getProductsByCategory } from "../../services/productService";
import { getCategoriesList } from "../../services/categoryService";
import ProductCard from "../ProductCard";
type Props = {
  categoryId: string;
};
export default function ProductByCategory({ categoryId }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<{ name: string } | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const [products, categories] = await Promise.all([
        getProductsByCategory(categoryId, 4),
        getCategoriesList(),
      ]);
      setProducts(products);
      setCategory(
        categories.find(
          (category: { _id: string }) => categoryId === category._id,
        ),
      );
    };
    fetchProducts();
  }, [categoryId]);

  return (
    <section className="py-10 bg-[#F0F0F0]">
      <div className="container">
        <h2 className="text-3xl font-bold">
          More Items to{" "}
          <span className="border-b-2 border-[#FF0000]">{category?.name}</span>
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

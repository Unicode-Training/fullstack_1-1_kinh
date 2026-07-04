import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product.type";
import { getProductsByCategory } from "../../services/productService";
import SafeImage from "../SafeImage";
import { getCategoriesList } from "../../services/categoryService";
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
  }, []);

  return (
    <section className="py-10 bg-[#F0F0F0]">
      <div className="container">
        <h2 className="text-3xl font-bold">
          More Items to{" "}
          <span className="border-b-2 border-[#FF0000]">{category?.name}</span>
        </h2>
        <div className="py-5 grid grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-[#D9D9D9] rounded-2xl overflow-hidden"
            >
              <Link to={"#"}>
                <SafeImage
                  src={product.image}
                  className="block h-[190px] w-full object-cover"
                />
              </Link>
              <div className="p-5">
                <h3 className="py-3">
                  <Link to={"#"}>{product.name}</Link>
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">
                    {product.price.toLocaleString()}đ
                  </span>
                  <button className="px-3 py-2 bg-[#7D7D7D] rounded-full cursor-pointer text-white">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

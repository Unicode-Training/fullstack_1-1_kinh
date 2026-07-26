import { useQuery } from "@tanstack/react-query";
import { getProductList } from "../services/product.service";
import type { Product } from "../types/product.type";
import "@aejkatappaja/phantom-ui";
import { Link, useSearchParams } from "react-router-dom";
import ProductAddModal from "@/components/products/ProductAddModal";
import { Button } from "@/components/ui/button";
import { useState, type ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { debounce } from "@/utils/debounce";

export default function Products() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const {
    data: productList,
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products", { q }],
    queryFn: () => getProductList(q),
  });

  return (
    <div className="max-w-300 mx-auto py-5">
      <h1 className="text-3xl mb-3 text-center">Products</h1>
      <Button className="mb-3" onClick={() => setOpenModal(true)}>
        Create
      </Button>
      <Input
        type="search"
        className="my-3"
        placeholder="Từ khóa..."
        onChange={debounce((e: ChangeEvent<HTMLInputElement>) =>
          setSearchParams({
            q: e.target.value,
          }),
        )}
      />
      <phantom-ui loading={isLoading}>
        {error ? (
          <h2 className="text-3xl">Error: {error.message}</h2>
        ) : (
          <div className="grid grid-cols-4 gap-5">
            {productList?.map((product) => (
              <div key={product.id}>
                <Link to={`/products/${product.slug}`}>
                  <img src={product.images[0]} alt="" />
                </Link>
                <h2 className="text-xl font-medium py-3">
                  <Link to={`/products/${product.slug}`}>{product.title}</Link>
                </h2>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </phantom-ui>
      <ProductAddModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

//query key:
// - ['key1']
// - ['key1', 'key2']

import type { ChangeEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
];
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const status = searchParams.get("status");
  const currentParams = Object.fromEntries([...searchParams.entries()]);
  return (
    <div>
      <h1 className="text-3xl mb-3">Products</h1>
      <div className="flex my-3">
        <select
          className="border border-[#ddd]"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setSearchParams({
              ...currentParams,
              status: e.target.value,
            });
          }}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Active</option>
        </select>
        <input
          type="search"
          placeholder="Search..."
          className="px-3 py-1 rounded-lg outline-none border border-[#ddd] "
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchParams({
              ...currentParams,
              q: e.target.value,
            });
          }}
        />
      </div>

      <div className="my-3">
        <p>Từ khóa tìm kiếm: {q}</p>
        <p>Trạng thái: {status}</p>
      </div>
      <div className="grid grid-cols-3">
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <h3 className="text-xl mb-2">{product.name}</h3>
            <Link to={`/products/${product.id}`}>Chi tiết</Link>
          </div>
        ))}
      </div>
      <div className="flex gap-1 mt-3">
        {Array.from(Array(10)).map((_, index) => (
          <button
            className="px-3 py-1 bg-green-600 text-white"
            key={index}
            onClick={() => {
              setSearchParams({
                ...currentParams,
                page: (index + 1).toString(),
              });
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

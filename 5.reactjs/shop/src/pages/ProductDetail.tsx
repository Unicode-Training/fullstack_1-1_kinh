import { useEffect, useState } from "react";
import ProductDescription from "../components/product-detail/ProductDescription";
import ProductImage from "../components/product-detail/ProductImage";
import ProductInfo from "../components/product-detail/ProductInfo";
import type { Product } from "../types/product.type";
import { getProductDetail } from "../services/productService";
import { useParams } from "react-router-dom";
export default function ProductDetail() {
  const [product, setProduct] = useState({} as Product);
  const [isLoading, setLoading] = useState(true);
  const { productId } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductDetail(productId!);
      setProduct({
        ...product,
        // description: `<h2>Đây là demo mô tả sản phẩm</h2>
        // <ul>
        //   <li>Thông tin 1</li>
        //   <li>Thông tin 2</li>
        //   <li>Thông tin 3</li>
        //   <li>Thông tin 4</li>
        // </ul>
        // <img src="https://fastly.picsum.photos/id/388/536/354.jpg?hmac=vxuMrbF3Ps9NvfCJ9F3imVmzB3cVxTZQjB9ayZWxRgY"/>
        // `,
      });
      setLoading(false);
    };
    fetchProduct();
  }, []);
  return (
    <section className="py-5">
      <div className="container">
        <phantom-ui loading={isLoading}>
          <div className="grid grid-cols-2 gap-5">
            <ProductImage image={product.image} gallery={product.gallery} />
            <ProductInfo {...product} />
          </div>
          <ProductDescription description={product.description} />
        </phantom-ui>
      </div>
    </section>
  );
}

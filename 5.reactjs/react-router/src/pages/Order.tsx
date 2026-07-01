import { useParams } from "react-router-dom";

export default function Order() {
  const { productId } = useParams();
  return (
    <div>
      <h1 className="text-3xl">Đặt hàng sản phẩm: {productId}</h1>
    </div>
  );
}

import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h1 className="text-3xl">Product Detail: {productId}</h1>
    </div>
  );
}

//useParams()

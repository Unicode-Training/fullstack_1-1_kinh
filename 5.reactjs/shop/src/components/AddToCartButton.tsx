import type React from "react";
import { toast } from "sonner";
import { addToCart } from "../services/cartService";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";
import clsx from "clsx";
import { Loader } from "lucide-react";

type Props = {
  children: React.ReactNode;
  className: string;
  quantity?: number;
  productId: string;
};
export default function AddToCartButton({
  children,
  className,
  quantity = 1,
  productId,
}: Props) {
  const navigate = useNavigate();
  const { fetchCart } = useCartStore();
  const [isLoading, setLoading] = useState<boolean>(false);
  const handleAddToCart = async () => {
    setLoading(true);
    toast.promise(() => addToCart(quantity, productId), {
      loading: "Đang xử lý...",
      success: () => {
        fetchCart();
        setLoading(false);
        return "Thêm vào giỏ hàng thành công";
      },
      error: (error: AxiosError) => {
        setLoading(false);
        if (error.status === 401) {
          navigate("/dang-nhap");
          return "Bạn chưa đăng nhập hoặc đã hết phiên. Đăng nhập để tiếp tục";
        }
        return "Không thể thêm vào giỏ lúc này";
      },
    });
  };
  return (
    <button
      onClick={handleAddToCart}
      className={clsx(className, "flex gap-2 items-center disabled:opacity-50")}
      disabled={isLoading}
    >
      {isLoading && <Loader size={14} />}
      {children}
    </button>
  );
}

import { useEffect, useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { CartItem } from "../types/cart.type";
import {
  deleteShoppingCart,
  getShoppingCarts,
  updateShoppingCart,
} from "../services/cartService";
import SafeImage from "../components/SafeImage";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { useCartStore } from "../store/cartStore";
import { debounce } from "../utils/debounce";
//useCallback
export default function ShoppingCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const navigate = useNavigate();
  const { setCart } = useCartStore();
  const getProductsByCart = async () => {
    const carts = await getShoppingCarts();
    const { items, total, totalQuantity } = carts;
    setItems(items);
    setTotal(total);
    setQuantity(totalQuantity);
    setCart(totalQuantity);
  };
  useEffect(() => {
    const fetchCarts = () => {
      getProductsByCart();
    };
    fetchCarts();
  }, []);
  const handleRemoveCartItem = async (productId: string) => {
    if (!confirm("Are you sure?")) {
      return;
    }
    toast.promise(() => deleteShoppingCart(productId), {
      loading: "Đang xử lý...",
      success: () => {
        getProductsByCart();
        return "Xóa sản phẩm khỏi giỏ hàng thành công";
      },
      error: (error: AxiosError) => {
        if (error.status === 401) {
          navigate("/dang-nhap");
          return "Bạn chưa đăng nhập hoặc đã hết phiên. Đăng nhập để tiếp tục";
        }
        return "Không thể xóa giỏ lúc này";
      },
    });
  };
  const updateQuantity = (productId: string, quantity: number) => {
    toast.promise(() => updateShoppingCart(productId, quantity), {
      loading: "Đang xử lý...",
      success: () => {
        getProductsByCart();
        return "Cập nhật sản phẩm giỏ hàng thành công";
      },
      error: (error: AxiosError) => {
        if (error.status === 401) {
          navigate("/dang-nhap");
          return "Bạn chưa đăng nhập hoặc đã hết phiên. Đăng nhập để tiếp tục";
        }
        return "Không thể cập nhật giỏ hàng lúc này";
      },
    });
  };
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="text-3xl mb-3">ShoppingCart</h1>
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.productId}
                  className="bg-neutral-primary border-b border-default"
                >
                  <td className="px-6 py-4">
                    <SafeImage src={item.image} className="w-20" />
                  </td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">
                    {item.priceDiscount
                      ? item.priceDiscount.toLocaleString()
                      : item.price.toLocaleString()}
                    đ
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      className="px-1 py-1 w-15 outline-0 border border-[#ddd] text-center rounded-md"
                      defaultValue={item.quantity}
                      onChange={debounce((e: ChangeEvent<HTMLInputElement>) =>
                        updateQuantity(item.productId, +e.target.value),
                      )}
                    />
                  </td>
                  <td className="px-6 py-4">{item.total.toLocaleString()}đ</td>
                  <td className="px-6 py-4">
                    <Trash2
                      className="cursor-pointer hover:text-red-600"
                      onClick={() => handleRemoveCartItem(item.productId)}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <th className="px-6 py-4" colSpan={3}>
                  Tổng
                </th>
                <td className="px-6 py-4">{quantity}</td>
                <td className="px-6 py-4">{total.toLocaleString()}đ</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-3 mt-3">
          <Link
            to={"/"}
            className="px-3 py-2 bg-amber-600 text-white rounded-lg"
          >
            Tiếp tục mua hàng
          </Link>

          <Link to={"/"} className="px-3 py-2 bg-red-600 text-white rounded-lg">
            Xóa giỏ hàng
          </Link>
          <Link
            to={"/"}
            className="px-3 py-2 bg-green-700 text-white rounded-lg"
          >
            Thanh toán
          </Link>
        </div>
      </div>
    </section>
  );
}

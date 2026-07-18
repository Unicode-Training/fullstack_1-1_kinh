import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { profile } from "../../services/authService";
import { useAuthStore } from "../../store/authStore";
import { useCartStore } from "../../store/cartStore";
export default function MainLayout() {
  const { setUser, removeUser } = useAuthStore();
  const { fetchCart } = useCartStore();
  const pathname = useLocation();
  const refetchProfile = async () => {
    const user = await profile();
    if (user) {
      setUser(user);
    } else {
      removeUser(); //Xóa user khỏi zustand
    }
  };
  useEffect(() => {
    if (pathname.state?.loginPage || pathname.pathname === "/dang-nhap") {
      refetchProfile();
      fetchCart();
    }
  }, [pathname]);

  useEffect(() => {
    refetchProfile();
    fetchCart();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { profile } from "../../services/authService";
import { useAuthStore } from "../../store/authStore";
export default function MainLayout() {
  const { setUser, removeUser } = useAuthStore();
  useEffect(() => {
    const refetchProfile = async () => {
      const user = await profile();
      if (user) {
        setUser(user);
      } else {
        removeUser(); //Xóa user khỏi zustand
      }
    };
    refetchProfile();
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

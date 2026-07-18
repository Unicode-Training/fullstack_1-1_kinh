import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { Loader } from "lucide-react";

export default function AuthMiddleware() {
  const { isAuthenticated, isLoading } = useAuthStore();
  //   console.log(`isAuthenticated`, isAuthenticated);
  //   console.log(`isLoading`, isLoading);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-5">
        <Loader className="animate-spin" size={30} />
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={"/dang-nhap"} />;
}

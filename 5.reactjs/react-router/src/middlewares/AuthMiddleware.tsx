import { Navigate, Outlet } from "react-router-dom";

export default function AuthMiddleware() {
  //Kiểm tra
  // - Hợp lệ --> Đi tiếp
  // - Không hợp lệ --> Chuyển sang login
  const isAuth = true;
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}

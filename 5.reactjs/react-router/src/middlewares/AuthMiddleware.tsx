import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthMiddleware() {
  //Kiểm tra
  // - Hợp lệ --> Đi tiếp
  // - Không hợp lệ --> Chuyển sang login
  const location = useLocation();
  // console.log(location);
  const isAuth = localStorage.getItem("token") === "123";

  if (!isAuth) {
    return <Navigate to={`/login?continue=${location.pathname}`} />;
  }
  return <Outlet />;
}

//Làm sao xác định được url hiện tại?
//useLocation()

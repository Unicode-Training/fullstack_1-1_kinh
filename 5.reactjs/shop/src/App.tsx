import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Auth/Login";
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/san-pham/:productId" element={<ProductDetail />} />
        <Route path="/dang-nhap" element={<Login />} />
      </Route>
    </Routes>
  );
}

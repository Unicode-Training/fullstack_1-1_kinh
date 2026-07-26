import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<ProductDetail />} />
    </Routes>
  );
}

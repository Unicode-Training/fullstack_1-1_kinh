import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Nav from "./components/Nav";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Order from "./pages/Order";

export default function App() {
  return (
    <div className="flex flex-wrap gap-3">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<AuthMiddleware />}>
            <Route path="/order/:productId" element={<Order />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

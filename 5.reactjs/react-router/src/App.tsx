import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Account from "./pages/accounts/Account";
import Profile from "./pages/accounts/Profile";
import ChangePassword from "./pages/accounts/ChangePassword";
import Subscription from "./pages/accounts/Subscription";
import AccountLayout from "./layouts/AccountLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<AuthMiddleware />}>
          <Route path="/order/:productId" element={<Order />} />
          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<Account />} />
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="subscription" element={<Subscription />} />
          </Route>
        </Route>
      </Route>

      <Route element={<AdminLayout />}>
        <Route element={<AuthMiddleware />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
        </Route>
      </Route>
    </Routes>
  );
}

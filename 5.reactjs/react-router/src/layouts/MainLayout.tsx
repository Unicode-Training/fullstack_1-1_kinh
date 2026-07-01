import { Link, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function MainLayout() {
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <div>
      <header className="max-w-300 p-3 mx-auto flex items-center justify-between">
        <span className="text-3xl font-medium">LOGO</span>
        <ul className="flex gap-3 items-center">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>Chào: {user.name}</li>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <span className="cursor-pointer" onClick={logout}>
                  Logout
                </span>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </header>
      <main className="max-w-300 mx-auto py-3">
        <Outlet />
      </main>
    </div>
  );
}

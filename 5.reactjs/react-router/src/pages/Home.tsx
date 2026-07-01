import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function Home() {
  const { logout, isAuthenticated } = useAuthStore();
  return (
    <div>
      <h1 className="text-3xl mb-3">Home</h1>
      {isAuthenticated ? (
        <button className="px-3 py-1 bg-green-600 text-white" onClick={logout}>
          Logout
        </button>
      ) : (
        <Link className="px-3 py-1 bg-yellow-700 text-white" to={"/login"}>
          Login
        </Link>
      )}
    </div>
  );
}

import { use } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { isLoading, isAuthenticated, user } = use(AuthContext);
  return (
    <div className="max-w-300 py-3 mx-auto flex justify-between">
      <span className="font-medium text-3xl">UNICODE</span>
      {isLoading ? (
        <span>Loading....</span>
      ) : isAuthenticated ? (
        <ul className="flex gap-3">
          <li>Chào, {user?.fullName}</li>
          <li>Logout</li>
        </ul>
      ) : (
        <ul className="flex gap-3">
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      )}
    </div>
  );
}

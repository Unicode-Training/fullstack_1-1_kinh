import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <nav className="w-[250px]">
        <ul>
          <li>
            <Link to={"/admin"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/admin/users"}>Users</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-5">
        <Outlet />
      </main>
    </div>
  );
}

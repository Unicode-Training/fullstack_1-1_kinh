import { Link, Outlet } from "react-router-dom";

export default function AccountLayout() {
  return (
    <div className="flex">
      <nav className="w-50">
        <ul>
          <li>
            <Link to={"/account"}>Dashobard</Link>
          </li>
          <li>
            <Link to={"/account/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/account/change-password"}>Change Password</Link>
          </li>
          <li>
            <Link to={"/account/subscription"}>Subscription</Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

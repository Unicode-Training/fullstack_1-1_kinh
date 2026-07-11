import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search-icon.png";
import { useAuthStore } from "../../store/authStore";
import { Loader } from "lucide-react";
export default function Header() {
  const { user, isLoading, isAuthenticated } = useAuthStore();
  return (
    <header className="py-5 shadow-md">
      <div className="container">
        <div className="flex justify-between items-center gap-30">
          <div className="font-semibold text-2xl">
            <Link to={"/"}>CRIO</Link>
          </div>
          <div className="relative flex-1">
            <img
              src={searchIcon}
              className="absolute top-2 bottom-0 left-2 w-[32px]"
            />
            <input
              type="text"
              placeholder="Search Products Here"
              className="py-2 px-12 pr-4 border border-[#8B8B8B] outline-none rounded-2xl w-full"
            />
          </div>
          <ul className="flex gap-5 items-center">
            <li>
              <Link className="font-medium" to={"#"}>
                Orders
              </Link>
            </li>
            <li>
              <ul className="flex items-center divide-x-[1px] divide-x-gray-900 -mr-5">
                {isLoading ? (
                  <Loader className="animate-spin" />
                ) : isAuthenticated ? (
                  <>
                    <li className="px-5">Chào: {user.fullName}</li>
                    <li className="px-5">Đăng xuất</li>
                  </>
                ) : (
                  <>
                    <li className="px-5">
                      <Link to={"/dang-ky"} className="font-medium">
                        Sign up
                      </Link>
                    </li>
                    <li className="px-5">
                      <Link to={"/dang-nhap"} className="font-medium">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

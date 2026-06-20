import { use, useEffect } from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import { AuthContext } from "./context/AuthContext";
import Welcome from "./components/Welcome";

export default function App() {
  const { isAuthenticated, isLoading, getProfile } = use(AuthContext);
  //Gọi api lên backend -> cập nhật lại context
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <Header />

      {isLoading ? (
        <span className="text-xl">Loading...</span>
      ) : isAuthenticated ? (
        <Welcome />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

/*
App
  - Header
      - Button

Context: 
- Object context
- Provider: Chứa dữ liệu của context và bọc các component muốn chia sẻ dữ liệu
- Consumer: Nhận dữ liệu từ context (useContext)
*/

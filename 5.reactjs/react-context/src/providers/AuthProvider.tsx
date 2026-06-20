import type React from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
type Props = {
  children: React.ReactNode;
};
export default function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    isLoading: false,
    user: null,
  });
  const getProfile = async () => {
    setAuth({ ...auth, isLoading: true });
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(`https://shop-api.unicode.vn/profile/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Unauthorize");
      }
      const data = await response.json();
      setAuth({
        user: data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch {
      setAuth({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        ...auth,
        setAuth,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

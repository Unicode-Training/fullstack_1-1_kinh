import { use, useState, type ChangeEvent, type SubmitEvent } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginForm() {
  const { setAuth } = use(AuthContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`https://shop-api.unicode.vn/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken); //Lưu vào localStorage
    //Cập nhật context -> React tự động đổi giao diện
    setAuth?.({ user: data.user, isAuthenticated: true, isLoading: false });
  };
  return (
    <form className="max-w-[350px] mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-3xl text-center mb-3">Login</h1>
      <div className="mb-3">
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email..."
          className="px-3 py-1 outline-none border border-[#ddd] rounded-md w-full"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password..."
          className="px-3 py-1 outline-none border border-[#ddd] rounded-md w-full"
          onChange={handleChange}
        />
      </div>
      <button className="px-3 py-1 bg-green-600 text-white rounded-full w-full">
        Login
      </button>
    </form>
  );
}

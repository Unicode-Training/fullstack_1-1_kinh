import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
type LoginForm = {
  email: string;
  password: string;
};
export default function Login() {
  const [form, setForm] = useState({} as LoginForm);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const continueUrl = searchParams.get("continue") ?? "/";
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("token", "123");
      navigate(continueUrl);
    } else {
      alert("Email hoặc mật khẩu không chính xác");
    }
  };
  return (
    <div>
      <h1 className="text-3xl">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="" className="block mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="px-3 py-1 border border-[#ddd] outline-none"
            placeholder="Email..."
            onChange={handleChangeValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="block mb-1">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="px-3 py-1 border border-[#ddd] outline-none"
            placeholder="Password..."
            onChange={handleChangeValue}
          />
        </div>
        <button className="px-3 py-1 bg-green-600 text-white">Login</button>
      </form>
    </div>
  );
}

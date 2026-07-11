import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { login } from "../../services/authService";
import { toast } from "sonner";
import { saveToken } from "../../utils/auth";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { setUser } = useAuthStore();
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.promise(() => login(form.email, form.password), {
      loading: "Đang đăng nhập",
      success: (data) => {
        saveToken(data);
        setUser(data.user);
        return "Đăng nhập thành công";
      },
      error: "Email hoặc mật khẩu không chính xác",
    });
  };
  return (
    <section className="py-5">
      <div className="max-w-100 mx-auto">
        <h1 className="text-3xl text-center mb-3">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="px-3 py-1 border border-[#ddd] rounded-xl w-full"
              placeholder="Email..."
              name="email"
              required
              onChange={handleChangeValue}
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="px-3 py-1 border border-[#ddd] rounded-xl w-full"
              placeholder="Password..."
              name="password"
              required
              onChange={handleChangeValue}
            />
          </div>
          <button className="px-3 py-1 bg-amber-700 text-white w-full cursor-pointer rounded-xl">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

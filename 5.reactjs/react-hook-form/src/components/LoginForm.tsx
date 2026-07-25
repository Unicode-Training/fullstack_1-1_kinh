import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/login.schema";
type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
  age?: number;
  status: "" | "active" | "inactive";
  agreeStatus: boolean;
  gender: string | null;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form className="max-w-1/2 mx-auto py-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl text-center mb-3">Login</h1>
      <div className="mb-3">
        <label htmlFor="" className="block">
          Email
        </label>
        <input
          type="text"
          placeholder="Email..."
          className="px-3 py-1 outline-none border border-[#ddd] rounded-xl w-full"
          {...register("email")}
        />
        {errors.email && (
          <span className="block text-red-600">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="block">
          Password
        </label>
        <input
          type="password"
          placeholder="Password..."
          className="px-3 py-1 outline-none border border-[#ddd] rounded-xl w-full"
          {...register("password")}
        />
        {errors.password && (
          <span className="block text-red-600">{errors.password.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="block">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password..."
          className="px-3 py-1 outline-none border border-[#ddd] rounded-xl w-full"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="block text-red-600">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="block">
          Tuổi
        </label>
        <input
          type="number"
          placeholder="Tuổi..."
          className="px-3 py-1 outline-none border border-[#ddd] rounded-xl w-full"
          {...register("age")}
        />
        {errors.age && (
          <span className="block text-red-600">{errors.age.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="" className="block">
          Trạng thái
        </label>
        <select
          className="px-3 py-1 outline-none border border-[#ddd] rounded-xl w-full"
          {...register("status")}
        >
          <option value="">Chọn Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        {errors.status && (
          <span className="block text-red-600">{errors.status.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label>
          <input type="checkbox" {...register("agreeStatus")} /> Đồng ý chính
          sách
        </label>
        {errors.agreeStatus && (
          <span className="block text-red-600">
            {errors.agreeStatus.message}
          </span>
        )}
      </div>

      <div className="mb-3">
        <label>
          <input type="radio" value="male" {...register("gender")} /> Nam
        </label>
        <label>
          <input type="radio" value="famele" {...register("gender")} /> Nữ
        </label>
        {errors.gender && (
          <span className="block text-red-600">{errors.gender.message}</span>
        )}
      </div>

      <button
        className="px-3 py-1 bg-green-600 text-white cursor-pointer disabled:opacity-50"
        disabled={!isValid}
      >
        Login
      </button>
    </form>
  );
}

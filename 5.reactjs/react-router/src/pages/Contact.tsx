import type { SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Gọi API Backend
    console.log("Đang gọi api");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Backend đã trả kết quả");

    //Backend trả về kết quả --> Chuyển hướng về trang chủ
    // window.location.href = "/";
    navigate("/", {
      replace: true,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="px-3 py-1 border border-[#ddd] w-full outline-none"
            placeholder="Name..."
          />
        </div>
        <button className="px-3 py-1 bg-green-600 text-white">Submit</button>
      </form>
    </div>
  );
}

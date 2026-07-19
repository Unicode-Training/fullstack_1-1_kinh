import { useEffect } from "react";
import RatingStar from "./RatingStar";
import { useRatingStore } from "../../store/ratingStore";
type Props = {
  open: boolean;
  onClose?: () => void;
};
export default function ReviewModal({ open, onClose }: Props) {
  const { rating } = useRatingStore();
  useEffect(() => {
    const handleKeyUp = () => {
      document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          onClose?.();
        }
      });
    };
    return () => {
      handleKeyUp();
    };
  }, []);

  return (
    open && (
      <div>
        <div className="fixed top-1/2 left-0 right-0 z-999 w-150 mx-auto border border-[#ddd] rounded-xl bg-white -translate-y-1/2 p-5">
          <h3 className="text-xl mb-3">Write Review Product</h3>
          <form action="">
            <div className="mb-3">
              <label htmlFor="">Title</label>
              <input
                type="text"
                className="px-3 py-2 border border-[#ddd] outline-none w-full rounded-xl"
                placeholder="Title..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Content</label>
              <textarea
                className="px-3 py-2 border border-[#ddd] outline-none w-full rounded-xl"
                placeholder="Content..."
              />
            </div>
            <div className="mb-3">
              <RatingStar value={rating} size="medium" />
            </div>
            <button className="px-5 py-2 bg-amber-600 text-white rounded-xl cursor-pointer hover:opacity-80">
              Submit Review
            </button>
          </form>
        </div>
        <div
          className="fixed inset-0 bg-black/70 z-990"
          onClick={onClose}
        ></div>
      </div>
    )
  );
}

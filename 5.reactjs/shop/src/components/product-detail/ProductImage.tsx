import { useEffect, useState } from "react";
import SafeImage from "../SafeImage";
import clsx from "clsx";
type Props = {
  image: string;
  gallery: string[];
};
export default function ProductImage({ image, gallery = [] }: Props) {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    (() => {
      setSelectedImage(image);
    })();
  }, [image]);
  const handleChangeImage = (url: string, index: number) => {
    setSelectedImage(url);
    setCurrentIndex(index);
  };

  return (
    <div className="flex gap-3 flex-start">
      <div className="w-12.5 flex flex-col gap-2">
        <div onClick={() => handleChangeImage(image, 0)}>
          <SafeImage
            src={image}
            className={clsx(
              "w-full rounded-md cursor-pointer hover:border hover:border-yellow-600 p-1",
              currentIndex === 0 && "border border-yellow-600",
            )}
          />
        </div>
        {gallery.map((image, index) => (
          <div key={index} onClick={() => handleChangeImage(image, index + 1)}>
            <SafeImage
              src={image}
              className={clsx(
                "w-full rounded-md cursor-pointer hover:border hover:border-[#ddd] p-1",
                currentIndex === index + 1 && "border border-yellow-600",
              )}
            />
          </div>
        ))}
      </div>
      <div className="flex-1">
        <SafeImage src={selectedImage} className="w-full" />
      </div>
    </div>
  );
}

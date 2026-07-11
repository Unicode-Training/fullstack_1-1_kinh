type Props = {
  src: string;
  className?: string;
};
import noPhoto from "../assets/noimage.jpg";
export default function SafeImage({ src, className }: Props) {
  return (
    <img
      src={src}
      className={className}
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = noPhoto;
      }}
    />
  );
}

type Props = {
  description: string;
};
export default function ProductDescription({ description }: Props) {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <h2 className="text-2xl">About this item</h2>
      <div
        className="product-description"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
}

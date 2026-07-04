import CategoriesList from "../components/home/CategoriesList";
import Hero from "../components/home/Hero";
import ProductByCategory from "../components/home/ProductByCategory";
import TodayDeal from "../components/home/TodayDeal";
const ids = [
  "68fe60528b8f1f71f8e0f251",
  "68fe60528b8f1f71f8e0f24f",
  "68fe60528b8f1f71f8e0f254",
];
export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesList />
      <TodayDeal />
      {ids.map((id) => (
        <ProductByCategory key={id} categoryId={id} />
      ))}
    </>
  );
}

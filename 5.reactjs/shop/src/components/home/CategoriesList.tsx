import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoriesList } from "../../services/categoryService";
import "@aejkatappaja/phantom-ui";
export default function CategoriesList() {
  const [categoriesList, setCategoriesList] = useState<
    { name: string; _id: string }[]
  >([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getCategoriesList();
      if (data) {
        setCategoriesList(data);
      } else {
        setError("Lỗi khi lấy categories");
      }
      setLoading(false);
    };
    fetchCategory();
  }, []);
  return (
    <section className="bg-white py-5">
      <div className="container">
        <phantom-ui loading={isLoading}>
          <ul className="flex items-center gap-5 overflow-auto">
            {error ? (
              <li>{error}</li>
            ) : (
              categoriesList.map((category) => (
                <li className="shrink-0" key={category._id}>
                  <Link
                    to="#"
                    className="block px-5 py-2 rounded-full bg-[#F5F5F5]"
                  >
                    {category.name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </phantom-ui>
      </div>
    </section>
  );
}

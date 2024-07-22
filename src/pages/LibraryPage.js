import { useState } from "react";
import Filters from "../components/filters/Filters";
import Movies from "../components/movies/Movies";
import { LANGUAGES } from "../utils/tmdb";
import { CATEGORIES } from "../utils/tmdb";

function LibraryPage() {
  const [activeCategories, setActiveCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );

  const toggleCategories = (category) => {
    const updatedCategories = [...activeCategories];

    if (!updatedCategories.includes(category)) {
      updatedCategories.push(category);
    } else {
      const index = updatedCategories.findIndex((item) => item === category);
      updatedCategories.splice(index, 1);
    }
    setActiveCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  return (
    <>
      <Filters
        categories={CATEGORIES}
        activeCategories={activeCategories}
        onUpdate={toggleCategories}
      />
      <Movies activeCategories={activeCategories} lang={LANGUAGES.us.lang} />
    </>
  );
}

export default LibraryPage;

import { useState } from "react";
import Filters from "../components/filters/Filters";
import Movies from "../components/movies/Movies";
import { LANGUAGES } from "../utils/tmdb";
import { CATEGORIES } from "../utils/tmdb";

import classes from "./LibraryPage.module.css";
import Title from "../components/layout/Title";

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

  const clearCategories = () => {
    setActiveCategories([]);
    localStorage.removeItem("categories");
  };

  return (
    <div className={classes.content_wrapper}>
      <div className={classes.section_title}>
        <Title>Library</Title>
        <Filters
          categories={CATEGORIES}
          activeCategories={activeCategories}
          onUpdate={toggleCategories}
          onClear={clearCategories}
        />
      </div>
      <Movies activeCategories={activeCategories} lang={LANGUAGES.us.lang} />
    </div>
  );
}

export default LibraryPage;

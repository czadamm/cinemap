import { useRef, useState } from 'react';
import Filters from '../components/filters/Filters';
import Movies from '../components/movies/Movies';
import { LANGUAGES } from '../utils/tmdb';
import { CATEGORIES } from '../utils/tmdb';

import classes from './LibraryPage.module.css';
import Title from '../components/layout/Title';
import BgWrapper from '../components/layout/BgWrapper';

function LibraryPage() {
  const [activeCategories, setActiveCategories] = useState(
    JSON.parse(localStorage.getItem('categories')) || []
  );
  const [titleQuery, setTitleQuery] = useState(null);
  const [page, setPage] = useState(1);
  const lastTitleChange = useRef();
  const content = useRef();

  const toggleCategories = (category) => {
    clearTitleQuery();
    setPage(1);
    const updatedCategories = [...activeCategories];

    if (!updatedCategories.includes(category)) {
      updatedCategories.push(category);
    } else {
      const index = updatedCategories.findIndex((item) => item === category);
      updatedCategories.splice(index, 1);
    }
    setActiveCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  const clearCategories = () => {
    setActiveCategories([]);
    setPage(1);
    localStorage.removeItem('categories');
  };

  const clearTitleQuery = () => {
    setTitleQuery(null);
    setPage(1);
  };

  const handleQueryTitle = (query) => {
    if (lastTitleChange.current) {
      clearTimeout(lastTitleChange.current);
    }

    lastTitleChange.current = setTimeout(() => {
      lastTitleChange.current = null;

      clearCategories();
      setTitleQuery(query);
    }, 500);
  };

  const handleShowMoreMovies = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 <
      window.scrollY + window.innerHeight
    ) {
      handleShowMoreMovies();
    }
  };

  function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  window.addEventListener('scroll', debounce(handleScroll, 500));

  return (
    <>
      <BgWrapper />
      <div ref={content} className={classes.content_wrapper}>
        <div className={classes.section_title}>
          <Title>Library</Title>
          <Filters
            categories={CATEGORIES}
            activeCategories={activeCategories}
            onUpdate={toggleCategories}
            onClear={clearCategories}
            onTitleClear={clearTitleQuery}
            onTitleQuery={handleQueryTitle}
          />
        </div>
        <Movies
          titleQuery={titleQuery}
          activeCategories={activeCategories}
          lang={LANGUAGES.us.lang}
          page={page}
        />
        <button type="button" onClick={handleShowMoreMovies}>
          More
        </button>
      </div>
    </>
  );
}

export default LibraryPage;

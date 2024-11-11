import { useState } from 'react';
import BgWrapper from '../components/layout/BgWrapper';
import Title from '../components/layout/Title';
import Movies from '../components/movies/Movies';
import classes from './UpcomingPage.module.css';

function UpcomingPage() {
  const [page, setPage] = useState(1);

  const handleShowMoreMovies = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const handleScroll = () => {
    if (document.body.scrollHeight < window.scrollY + window.innerHeight) {
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

  window.addEventListener('scroll', debounce(handleScroll, 1500));
  return (
    <>
      <BgWrapper />
      <div className={classes.content_wrapper}>
        <div className={classes.section_title}>
          <Title>Soon in theaters</Title>
        </div>
        <Movies upcoming={true} page={page} />
      </div>
    </>
  );
}

export default UpcomingPage;

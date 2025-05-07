import { useState } from 'react';
import BgWrapper from '../components/layout/BgWrapper';
import Title from '../components/layout/Title';
import Movies from '../components/movies/Movies';
import classes from './UpcomingPage.module.css';
import {usePreferences} from "../context/PreferencesContext";
import {useTranslation} from "react-i18next";

function UpcomingPage() {
  const [page, setPage] = useState(1);
  const { preferences } = usePreferences()
  const { t } = useTranslation()

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
          <Title>{t("upcomingTitle")}</Title>
        </div>
        <Movies upcoming={true} lang={preferences.locale} page={page} />
      </div>
    </>
  );
}

export default UpcomingPage;

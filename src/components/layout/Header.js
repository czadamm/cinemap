import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

import classes from './Header.module.css';
import logoLight from '../../assets/logo-light.svg';
import UserButton from '../user/UserButton';
import {usePreferences} from "../../context/PreferencesContext";
import {useTranslation} from "react-i18next";
import LangMenu from "./LangMenu";

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const userMenuRef = useRef(null);
  const { scrollY } = useScroll();
  const { t } = useTranslation();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 20) {
      setIsPageScrolled(true);
      setIsUserMenuVisible(false);
    } else {
      setIsPageScrolled(false);
    }
  });

  const toggleUserMenu = () => {
    setIsUserMenuVisible((prevState) => !prevState);
  };

  // hide user menu by click outside of it -----------------------------
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!userMenuRef.current?.contains(e.target)) {
        setIsUserMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  // -------------------------------------------------------------------

  return (
    <header
      className={`${classes.header} ${isPageScrolled && classes.scrolled}`}
    >
      <div className={classes.nav_wrapper}>
        <Link to="/">
          <img src={logoLight} alt="CINEMAP" />
        </Link>
        <nav className={classes.nav_top}>
          <ul>
            <li>
              <Link to="/">{t("menuHome")}</Link>
            </li>
            <li>
              <Link to="library">{t("menuLibrary")}</Link>
            </li>
            <li>
              <Link to="upcoming">{t("menuUpcoming")}</Link>
            </li>
            <li>
              <LangMenu />
            </li>
            <li>
              <UserButton name="Adam" toggleFn={toggleUserMenu} />
            </li>
            <li>
              <Link to="auth?mode=login" className={classes.button}>
                {t("menuSignIn")}
              </Link>
            </li>
          </ul>
          {isUserMenuVisible && (
            <nav className={classes.user_nav} ref={userMenuRef}>
              <ul>
                <li>
                  <Link to="/user/my-account" onClick={toggleUserMenu}>
                    {t("menuAccount")}
                  </Link>
                </li>
                <li>
                  <Link to="/user/favourites" onClick={toggleUserMenu}>
                    {t("menuFavourites")}
                  </Link>
                </li>
                <li>
                  <Link to="/user/settings" onClick={toggleUserMenu}>
                    {t("menuSettings")}
                  </Link>
                </li>
                <li>
                  <Link to="/help" onClick={toggleUserMenu}>
                    {t("menuHelp")}
                  </Link>
                </li>
                <li className={classes.logout_btn}>
                  <Link to="/user/logout" onClick={toggleUserMenu}>
                    {t("menuLogout")}
                    <span>
                      <i class="fa-solid fa-door-open"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;

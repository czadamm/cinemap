import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

import classes from "./Header.module.css";
import logoLight from "../../assets/logo-light.svg";
import UserButton from "../user/UserButton";

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const userMenuRef = useRef(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
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
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setIsUserMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="library">Library</Link>
            </li>
            <li>
              <Link to="upcoming">Upcoming</Link>
            </li>
            <li>
              <UserButton toggleFn={toggleUserMenu} />
            </li>
            <li>
              <Link to="sign-in" className={classes.button}>
                Sign-in
              </Link>
            </li>
          </ul>
          {isUserMenuVisible && (
            <nav className={classes.user_nav} ref={userMenuRef}>
              <ul>
                <li>
                  <Link to="/user/my-account">Account</Link>
                </li>
                <li>
                  <Link to="/user/favourites">My Movies</Link>
                </li>
                <li>
                  <Link to="/user/settings">Settings</Link>
                </li>
                <li>
                  <Link to="/help">Help</Link>
                </li>
                <li className={classes.logout_btn}>
                  <Link to="/user/logout">
                    Logout
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
      <div className={classes.user_nav_wrapper}></div>
    </header>
  );
}

export default Header;

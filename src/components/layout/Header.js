import { Link } from "react-router-dom";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

import classes from "./Header.module.css";
import logoLight from "../../assets/logo-light.svg";

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  });

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
              <Link to="sign-in" className={classes.button}>
                Sign-in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

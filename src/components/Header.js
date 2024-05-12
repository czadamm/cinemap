import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./Header.module.css";

import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";

function Header() {
  const [openSettings, setOpenSettings] = useState(false);

  const handleToggleSettings = () => {
    setOpenSettings((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <img src={logoLight} alt="logo" />
      <nav className={classes.nav_top}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="library">Library</Link>
          </li>
          <li>
            <Link to="news">News</Link>
          </li>
          <li>
            <Link to="login" className={classes.button}>
              Log in
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-gear" onClick={handleToggleSettings}></i>
            <div
              id={classes.settings_window}
              className={openSettings ? classes.active : undefined}
            >
              <p>Theme</p>
              <p>Language</p>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

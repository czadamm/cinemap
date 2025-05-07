import classes from "./Footer.module.css";
import logo from "../../assets/tmdb-full.svg";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <div className={classes.copyrights}>
        <p>2024 &copy; Adam Czerniak</p>
        <p className={classes.credits}>
          <span>Powered by</span>
          <span className={classes.tmdb_logo}>
            <a href="https://www.themoviedb.org/">
              <img src={logo} alt="TMDB logo" />
            </a>
          </span>
        </p>
      </div>
      <ul className={classes.navigation}>
        <li>
          <Link to="/">{t("menuHome")}</Link>
        </li>
        <li>
          <Link to="/library">{t("menuLibrary")}</Link>
        </li>
        <li>
          <Link to="/upcoming">{t("menuUpcoming")}</Link>
        </li>
        <li>
          <Link to="/help">{t("menuHelp")}</Link>
        </li>
        <li>
          <Link to="/cookies">Cookies</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

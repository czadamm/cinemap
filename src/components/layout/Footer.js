import classes from "./Footer.module.css";
import logo from "../../assets/tmdb-full.svg";
import { Link } from "react-router-dom";

function Footer() {
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/cookies">Cookies</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

import classes from "./Footer.module.css";
import logo from "../assets/tmdb-full.svg";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.credits}>
        <span>Powered by</span>
        <span className={classes.tmdb_logo}>
          <a href="https://www.themoviedb.org/">
            <img src={logo} alt="TMDB logo" />
          </a>
        </span>
      </p>
      <p>Copyright &copy; 2024 Adam Czerniak</p>
    </footer>
  );
}

export default Footer;

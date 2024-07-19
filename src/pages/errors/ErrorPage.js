import Header from "../../components/Header";
import Footer from "../../components/Footer";
import classes from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className="app">
      <Header />
      <main className={classes.main}>
        <h2 className={classes.error_code}>404 Not found</h2>
        <p className={classes.error_message}>
          We couldn't load this page. Check an address or try again later{" "}
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;

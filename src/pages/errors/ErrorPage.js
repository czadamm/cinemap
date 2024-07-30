import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import classes from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={classes.background}>
      <div className={classes.background_blur}>
        <Header />
        <main className={classes.main}>
          <h2 className={classes.error_code}>Page Not found</h2>
          <p className={classes.error_message}>
            We couldn't load this page. Check an address or try again later{" "}
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ErrorPage;

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import classes from "./ErrorPage.module.css";
import BgWrapper from "../../components/layout/BgWrapper";

function ErrorPage() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <BgWrapper>
          <div className={classes.content_wrapper}>
            <h2 className={classes.error_code}>Page Not found</h2>
            <p className={classes.error_message}>
              We couldn't load this page. Check an address or try again later{" "}
            </p>
          </div>
        </BgWrapper>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;

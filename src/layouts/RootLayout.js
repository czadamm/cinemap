import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import classes from "./RootLayout.module.css";

function RootLayout() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;

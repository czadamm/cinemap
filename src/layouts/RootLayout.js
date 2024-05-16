import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;

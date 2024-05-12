import { Outlet } from "react-router";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayout;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LibraryPage from "./pages/LibraryPage";
import HomePage from "./pages/HomePage";
import UpcomingPage from "./pages/UpcomingPage";
import LoginPage from "./pages/LoginPage";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "library", element: <LibraryPage /> },
      { path: "upcoming", element: <UpcomingPage /> },
      { path: "sign-in", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

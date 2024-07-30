import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LibraryPage from "./pages/LibraryPage";
import HomePage from "./pages/HomePage";
import UpcomingPage from "./pages/UpcomingPage";
import LoginPage from "./pages/LoginPage";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/errors/ErrorPage";
import MovieDetails from "./pages/MovieDetails";
import AccountPage from "./pages/user/AccountPage";
import FavouritesPage from "./pages/user/FavouritesPage";
import SettingsPage from "./pages/user/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "library", element: <LibraryPage /> },
      { path: "upcoming", element: <UpcomingPage /> },
      { path: "sign-in", element: <LoginPage active={true} /> },
      { path: "sign-up", element: <LoginPage active={false} /> },
      {
        path: "movie",
        children: [{ path: ":id/details", element: <MovieDetails /> }],
      },
      {
        path: "user",
        children: [
          { path: "my-account", element: <AccountPage /> },
          { path: "favourites", element: <FavouritesPage /> },
          { path: "settings", element: <SettingsPage /> },
          { path: "logout", action: null },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

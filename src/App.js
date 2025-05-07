import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LibraryPage from './pages/LibraryPage';
import HomePage from './pages/HomePage';
import UpcomingPage from './pages/UpcomingPage';
import LoginPage from './pages/LoginPage';
import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/errors/ErrorPage';
import MovieDetails from './pages/MovieDetails';
import AccountPage from './pages/user/AccountPage';
import MyMoviesPage from './pages/user/MyMoviesPage';
import SettingsPage from './pages/user/SettingsPage';
import HelpPage from './pages/HelpPage';
import {PreferencesProvider} from "./context/PreferencesContext";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'library', element: <LibraryPage /> },
      { path: 'upcoming', element: <UpcomingPage /> },
      { path: 'help', element: <HelpPage /> },
      { path: 'auth', element: <LoginPage /> },
      {
        path: 'movie',
        children: [{ path: ':id/details', element: <MovieDetails /> }],
      },
      {
        path: 'user',
        children: [
          { path: 'my-account', element: <AccountPage /> },
          { path: 'favourites', element: <MyMoviesPage /> },
          { path: 'settings', element: <SettingsPage /> },
          { path: 'logout', action: null },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <PreferencesProvider>
      <RouterProvider router={router} />
    </PreferencesProvider>
  );
}

export default App;

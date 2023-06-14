import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShowInfoPage from "../pages/ShowInfoPage";
import DiscoverPage from "../pages/DiscoverPage";
import FavoritePage from "../pages/FavoritePage";
import MainLayout from "../Layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import SignInAuth from "../components/AuthComponents/SignInAuth";
import SignUpAuth from "./../components/AuthComponents/SignUpAuth";
import ProfileDashboard from "../components/AuthComponents/ProfileDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "my-shows", element: <FavoritePage /> },
      { path: "Discover", element: <DiscoverPage /> },
      { path: "shows/:showId", element: <ShowInfoPage /> },
      { path: "profile", element: <ProfileDashboard /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      { path: "signin", element: <SignInAuth /> },
      { path: "signup", element: <SignUpAuth /> },
    ],
  },
]);

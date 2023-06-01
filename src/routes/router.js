import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ShowInfoPage from "../pages/ShowInfoPage";
import DiscoverPage from "../pages/DiscoverPage";
import FavoritePage from "../pages/FavoritePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "my-shows", element: <FavoritePage /> },
      { path: "Discover", element: <DiscoverPage /> },
      { path: "shows/:showId", element: <ShowInfoPage /> },
    ],
  },
]);

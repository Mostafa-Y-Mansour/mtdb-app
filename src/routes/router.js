import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ShowInfoPage from "../pages/ShowInfoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "my-shows", element: <h1>mo7sen</h1> },
      { path: "Discover", element: <h1>Discover</h1> },
      { path: "shows/:showid", element: <ShowInfoPage /> },
    ],
  },
]);

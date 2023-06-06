import MainNavbar from "../components/MainNavbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}

export default MainLayout;

import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import MainNavbar from "./components/MainNavbar";
import { Outlet } from "react-router-dom";

function App() {
  async function getFlightData() {
    const options = "https://api.tvmaze.com/search/shows?q=never+have+i+ever";

    try {
      const response = await axios.request(options);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFlightData();
  }, []);

  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}

export default App;

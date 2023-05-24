import React, { useEffect, useState } from "react";
import "./Logo.css";
import logo from "../../assets/logo-images/MTDB-logo.svg";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchShow } from "../../rtk/slices/showInfoSlice";

export default function Logo(props) {
  const [status, setStatus] = useState("loading");

  const dispatch = useDispatch();
  const showInfo = useSelector((state) => {
    return state.showInfo;
  });

  const getStatus = () => {
    if (showInfo === "pending") {
      return setStatus("loading");
    } else {
      setTimeout(() => {
        return setStatus("");
      }, 1000);
    }
  };

  useEffect(() => {
    getStatus();
    dispatch(fetchShow());
  }, []);

  return (
    <div className={`logo-wrapper ${status} `}>
      <img src={logo} alt="" />

      <Spinner
        animation={
          status === "loading"
            ? "border"
            : status === "loading error"
            ? "grow"
            : ""
        }
        variant={
          status === "loading"
            ? "primary"
            : status === "loading error"
            ? "danger"
            : ""
        }
      />
    </div>
  );
}

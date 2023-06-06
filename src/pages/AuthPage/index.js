import React from "react";
import "./AuthPage.css";
import { Outlet, useHref, useNavigate } from "react-router-dom";

export default function AuthPage(props) {
  const navigate = useNavigate();
  const path = useHref();

  if (path === "/auth") navigate("signin");

  return (
    <div
      className="auth-container"
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Outlet />
    </div>
  );
}

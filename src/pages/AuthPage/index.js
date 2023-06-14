import React from "react";
import "./AuthPage.css";
import { Outlet, useNavigate, useResolvedPath } from "react-router-dom";
import AuthUserDetails from "../../components/AuthComponents/AuthUserDetails";

export default function AuthPage(props) {
  const navigate = useNavigate();
  const path = useResolvedPath();

  if (path.pathname === "/auth") return navigate("signin");

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

import React from "react";
import "./ProfileAndAuthButton.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProfileAndAuthButton(props) {
  return (
    <Button variant="dark" className="auth-btn" as={Link} to="/auth">
      Sign In/Up
    </Button>
  );
}

import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../../config/firebase";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AuthUserDetails(props) {
  const userInfo = useSelector((state) => state.userInfo);
  const navigate = useNavigate();

  const userSignOut = async () => {
    try {
      await signOut(auth);
      window.localStorage.clear();
      console.log("signed out");
    } catch (err) {
      console.log("sign out error", err);
    }
  };

  useEffect(() => {}, [userInfo]);

  return (
    <>
      {userInfo.isLogged ? (
        <>
          <Button variant="danger" className="bg-danger" onClick={userSignOut}>
            sign out
          </Button>
        </>
      ) : (
        navigate("/auth/signin")
      )}
    </>
  );
}

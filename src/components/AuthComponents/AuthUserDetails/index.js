import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../../config/firebase";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export default function AuthUserDetails(props) {
  const userInfo = useSelector((state) => state.userInfo);

  const userSignOut = async () => {
    try {
      await signOut(auth);
      window.localStorage.clear();
      console.log("signed out");
    } catch (err) {
      console.log("sign out error", err);
    }
  };

  return (
    <>
      {userInfo.isLogged ? (
        <>
          <Button variant="danger" className="bg-danger" onClick={userSignOut}>
            sign out
          </Button>
        </>
      ) : (
        <>signed out</>
      )}
    </>
  );
}

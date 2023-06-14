import React, { useEffect } from "react";
import "./ProfileAndAuthButton.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import maleProfileImage from "../../../assets/shared/male-profile-image.jpg";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { signInUser, signOutUser } from "../../../rtk/slices/userInfoSlice";

export default function ProfileAndAuthButton(props) {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(signInUser({ ...user }));
      } else {
        dispatch(signOutUser());
      }
    });
    return () => {
      listen();
    };
  }, []);

  const checkLogging = () => {
    if (userInfo.isLogged) {
      return (
        <Link className="profile-btn" to="/profile">
          <p>{userInfo?.displayName}</p>
          <img src={userInfo?.photoURL || maleProfileImage} alt="" />
        </Link>
      );
    }
    return (
      <Button variant="dark" className="auth-btn" as={Link} to="/auth/signin">
        Sign In/Up
      </Button>
    );
  };
  return checkLogging();
}

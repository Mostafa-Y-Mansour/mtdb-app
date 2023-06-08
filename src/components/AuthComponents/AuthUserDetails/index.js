import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, signOutUser } from "../../../rtk/slices/userInfoSlice";

export default function AuthUserDetails(props) {
  const [authUser, setAuthUser] = useState(null);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({ ...user });
        dispatch(signInUser({ ...user }));
      } else {
        setAuthUser(null);
        dispatch(signOutUser());
      }

      return () => {
        listen();
      };
    });
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("signed out"))
      .catch((err) => console.log("sign out error", err));
  };

  return (
    <div className="bg-white">
      {authUser ? (
        <>
          <p>
            Name {<br />} {userInfo?.displayName}
          </p>
          <p>signed in as {userInfo?.email}</p>
          <button onClick={userSignOut}>sign out</button>
        </>
      ) : (
        <>signed out</>
      )}
    </div>
  );
}

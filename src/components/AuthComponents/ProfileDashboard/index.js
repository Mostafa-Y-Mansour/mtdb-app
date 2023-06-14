import React, { useEffect, useState } from "react";
import "./ProfileDashboard.css";
import {
  onAuthStateChanged,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth, upload } from "../../../config/firebase";
import { Link } from "react-router-dom";
import AuthUserDetails from "../AuthUserDetails";
import { Alert, Button } from "react-bootstrap";
import profileImage from "../../../assets/shared/male-profile-image.jpg";

export default function ProfileDashboard(props) {
  const [userObj, setUserObj] = useState({});
  const [name, setName] = useState("");
  const [email, SetEmail] = useState("");
  // const [oldPassword, SetOldPassword] = useState("");
  const [newPassword, SetNewPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const profileUpdateHandler = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      await updateProfile(user, {
        displayName: name,
      });

      await updateEmail(user, email);
      await updatePassword(user, newPassword);
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleClick = () => {
    upload(photo, auth.currentUser, setLoading);
    setPhoto(null);
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }

    if (photo) {
      return handleClick();
    }
  };

  useEffect(() => {
    console.log("photo", photo);
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUserObj({ ...user });
        setName(user?.displayName);
        SetEmail(user?.email);
      } else {
        setUserObj({});
        setName("");
        SetEmail("");
      }
    });

    if (photo) {
      handleClick();
    }

    return () => {
      listen();
    };
  }, [photo]);

  const profileActivationStatus = (() => {
    if (userObj?.emailVerified) {
      return <Alert variant={"primary"}>account is Verified</Alert>;
    } else {
      return <Alert variant={"warning"}>account is not Verified</Alert>;
    }
  })();

  const profileImageHandler = (() => {
    if (userObj?.photoURL) {
      return userObj.photoURL;
    } else {
      return profileImage;
    }
  })();

  return (
    <div className="dashboard-container">
      <div className="profile-dashboard">
        <div className="profile-status">
          <h2>Profile Dashboard</h2>
          {profileActivationStatus}
        </div>
        <div className="main-dashboard">
          <div className="main-profile">
            <div className="profile-image">
              <img src={profileImageHandler} alt="" />

              <label htmlFor="file" className="footer">
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path d="M15.331 6H8.5v20h15V14.154h-8.169z" />
                    <path d="M18.153 6h-.009v5.342H23.5v-.002z" />
                  </g>
                </svg>
                <p>
                  {loading ? (
                    <div class="loader-image"></div>
                  ) : (
                    "Upload new Image"
                  )}
                </p>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z"
                      stroke="#000000"
                      strokeWidth={2}
                    />
                    <path
                      d="M19.5 5H4.5"
                      stroke="#000000"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />

                    <path
                      d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z"
                      stroke="#000000"
                      strokeWidth={2}
                    />
                  </g>
                </svg>
              </label>

              <input
                type="file"
                name="file"
                id="file"
                onChange={handleChange}
              />
            </div>

            <AuthUserDetails />
          </div>

          {/* form */}
          <form className="form" onSubmit={(e) => profileUpdateHandler(e)}>
            <div className="name flex-column">
              {/* name */}
              <div className="flex-column">
                <label>Name</label>
                <div className="inputForm">
                  <input
                    placeholder="Update Your Name"
                    className="input"
                    type="text"
                    // required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* email */}
            <div className="flex-column">
              <label>Email </label>
            </div>
            <div className="inputForm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                viewBox="0 0 32 32"
                height={20}
              >
                <g data-name="Layer 3" id="Layer_3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                </g>
              </svg>
              <input
                placeholder="Update your Email"
                className="input"
                type="text"
                value={email}
                required
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
              />
            </div>
            {/* Password */}
            <div className="flex-column">
              <label>Password</label>
            </div>

            <div className="inputForm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                viewBox="-64 0 512 512"
                height={20}
              >
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
              </svg>
              <input
                placeholder="Update Your Password"
                className="input"
                type="password"
                value={newPassword}
                // required
                onChange={(e) => {
                  SetNewPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <button className="button-submit">save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

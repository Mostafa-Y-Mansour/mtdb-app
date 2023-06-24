import React, { useEffect, useState } from "react";
import "./ProfileDashboard.css";
import {
  onAuthStateChanged,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth, storage } from "../../../config/firebase";
import AuthUserDetails from "../AuthUserDetails";
import { Alert } from "react-bootstrap";
import profileImage from "../../../assets/shared/male-profile-image.jpg";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, signOutUser } from "../../../rtk/slices/userInfoSlice";

export default function ProfileDashboard(props) {
  const [userObj, setUserObj] = useState({});
  const [name, setName] = useState("");
  const [email, SetEmail] = useState("");
  // const [oldPassword, SetOldPassword] = useState("");
  const [newPassword, SetNewPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const profileUpdateHandler = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      console.log("user", user);
      await updateProfile(user, {
        displayName: name,
      });

      await updateEmail(user, email);
      await updatePassword(user, newPassword);

      dispatch(signInUser({ ...user }));
    } catch (err) {
      console.log("update error", err);
    }
  };

  // storage
  const upload = async (file, currentUser, setLoading) => {
    try {
      const fileRef = ref(storage, currentUser.uid + ".png");
      setLoading(true);

      await uploadBytes(fileRef, file);

      const photoURL = await getDownloadURL(fileRef);

      updateProfile(currentUser, { photoURL });
      dispatch(signInUser(currentUser));
      setLoading(false);
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

  const profileActivationStatus = (() => {
    if (userObj?.emailVerified) {
      return <Alert variant={"primary"}>Account is Verified</Alert>;
    } else {
      return <Alert variant={"warning"}>Account is not Verified</Alert>;
    }
  })();

  const profileImageHandler = (() => {
    if (userObj?.photoURL) {
      return userObj.photoURL;
    } else {
      return profileImage;
    }
  })();

  useEffect(() => {
    console.log("photo", photo);
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObj({ ...user });
        setName(user?.displayName);
        SetEmail(user?.email);
        dispatch(signInUser({ ...user }));
      } else {
        setUserObj({});
        setName("");
        SetEmail("");
        dispatch(signOutUser());
      }
    });

    if (photo) {
      handleClick();
    }

    return () => {
      listen();
    };
  }, [photo]);

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
              <img src={profileImageHandler} alt="" loading="lazy" />

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
                {/*  */}
                {/*?xml version="1.0" encoding="utf-8"?*/}
                {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.0344 14.0062C13.0361 14.5585 12.5898 15.0076 12.0375 15.0093C11.4853 15.0111 11.0361 14.5647 11.0344 14.0125L13.0344 14.0062Z" />
                  <path d="M9.71867 6.72364L11.0075 5.42672L11.0344 14.0125L13.0344 14.0062L13.0075 5.42045L14.3044 6.70926C14.6961 7.09856 15.3293 7.09659 15.7186 6.70484C16.1079 6.3131 16.1059 5.67993 15.7142 5.29064L11.9955 1.59518L8.30003 5.31387L9.71867 6.72364Z" />
                  <path d="M8.30003 5.31387C7.91073 5.70562 7.9127 6.3388 8.30445 6.7281C8.69619 7.1174 9.32938 7.11539 9.71867 6.72364L8.30003 5.31387Z" />
                  <path d="M4 12C4 10.8954 4.89543 10 6 10C6.55228 10 7 9.55229 7 9C7 8.44772 6.55228 8 6 8C3.79086 8 2 9.79086 2 12V18C2 20.2091 3.79086 22 6 22H17C19.7614 22 22 19.7614 22 17V12C22 9.79086 20.2091 8 18 8C17.4477 8 17 8.44772 17 9C17 9.55229 17.4477 10 18 10C19.1046 10 20 10.8954 20 12V17C20 18.6569 18.6569 20 17 20H6C4.89543 20 4 19.1046 4 18V12Z" />
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

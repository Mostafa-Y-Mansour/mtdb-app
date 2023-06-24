import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "./../../../config/firebase";
import GoogleAuth from "../AuthWithService/GoogleAuth";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

export default function SignUpAuth(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordMatch, setPasswordMatch] = useState(false);
  const [remember, setRemember] = useState(false);
  const [signUpErr, setSignUpErr] = useState(null);

  const userInfo = useSelector((state) => state.userInfo);

  const navigate = useNavigate();

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: firstName + " " + lastName,
      });

      if (remember) {
        window.localStorage.setItem(
          "userinfo",
          JSON.stringify({ ...userCredential.user })
        );
      } else {
        window.localStorage.clear();
      }
      setSignUpErr(null);
    } catch (err) {
      console.log("Auth error", err);
      setSignUpErr(err);
    }
  };

  const passwordMatchHandler = (e) => {
    e.target.value === password
      ? setPasswordMatch(true)
      : setPasswordMatch(false);
  };

  const setValueHandler = (e, state) => {
    return state(e.target.value);
  };

  const errorHandler = () => {
    if (signUpErr && password.length < 6) {
      return (
        <Alert variant={"danger"}>
          Password should be more than 6 characters
        </Alert>
      );
    } else if (signUpErr) {
      return <Alert variant={"danger"}>Email or password are incorrect</Alert>;
    } else {
      return "";
    }
  };

  useEffect(() => {
    if (userInfo.isLogged) {
      return navigate("/profile");
    }
  }, [userInfo]);

  return (
    <>
      <form className="form" onSubmit={signUpHandler}>
        <h2>sign up</h2>
        {errorHandler()}
        <div className="name flex">
          {/* name */}
          <div className="flex-column">
            <label>First Name</label>
            <div className="inputForm">
              <input
                placeholder="Enter your First Name"
                className="input"
                type="text"
                // required
                value={firstName}
                onChange={(e) => setValueHandler(e, setFirstName)}
              />
            </div>
          </div>
          <div className="flex-column">
            <label>Last Name</label>
            <div className="inputForm">
              <input
                placeholder="Enter your Last Name"
                className="input"
                type="text"
                // required
                value={lastName}
                onChange={(e) => setValueHandler(e, setLastName)}
              />
            </div>
          </div>
        </div>
        <div className="flex-column">
          {/* Email */}

          <label>Email</label>
        </div>
        <div className="inputForm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            viewBox="0 0 32 32"
            height={20}
            value={email}
          >
            <g data-name="Layer 3" id="Layer_3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
            </g>
          </svg>
          <input
            placeholder="Enter your Email"
            className="input"
            type="email"
            required
            onChange={(e) => {
              setValueHandler(e, setEmail);
            }}
          />
        </div>

        {/* password */}

        <div className="flex-column">
          <label>Password </label>
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
            placeholder="Enter your Password"
            className="input"
            type="password"
            required
            fill={isPasswordMatch ? "green" : "red"}
            onChange={(e) => {
              setPassword(e.target.value);
              passwordMatchHandler(e);
            }}
          />
        </div>

        <div
          className="inputForm"
          style={{ borderColor: isPasswordMatch ? "green" : "red" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            viewBox="-64 0 512 512"
            height={20}
            fill={isPasswordMatch ? "green" : "red"}
            required
          >
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
          </svg>
          <input
            placeholder="Enter your Password Again"
            className="input"
            type="password"
            onChange={(e) => {
              passwordMatchHandler(e);
            }}
          />
        </div>

        <button className="button-submit">Sign UP</button>
        <p className="p">
          Already have an account?{" "}
          <Link to={"/auth/signin"} className="span">
            Sign In
          </Link>
        </p>

        <p className="p line">Or With</p>
        <div className="flex">
          {/* google */}
          <GoogleAuth />
        </div>
      </form>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import burger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import "./MainNavbar.css";
import ProfileAndAuthButton from "../AuthComponents/ProfileAndAuthButton";

export default function MainNavbar() {
  const [icon, setIcon] = useState(true);
  const [activeTap, setActiveTap] = useState("/");

  useEffect(() => {
    setActiveTap(window.location.pathname);
  }, []);

  return (
    <Navbar className="fixed-top" bg="transparent" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="">
          <Logo />
        </Navbar.Brand>
        <div
          className={`burger ms-auto ${icon ? "block" : "none"}`}
          onClick={() => setIcon(!icon)}
        >
          <img src={icon ? burger : close} alt="" />
        </div>
        <Nav
          className={`links-container ms-auto d-flex justify-content-center ${
            icon ? "" : "links-container-active"
          }`}
        >
          <div
            className={`burger close ms-auto ${icon ? "none" : "block"}`}
            onClick={() => setIcon(!icon)}
          >
            <img src={icon ? burger : close} alt="" />
          </div>
          <Nav.Link
            className={activeTap === "/" ? "active" : ""}
            as={Link}
            to="/"
            onClick={() => {
              setIcon(true);
              setActiveTap("/");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={activeTap === "/my-shows" ? "active" : ""}
            as={Link}
            to="my-shows"
            onClick={() => {
              setIcon(true);
              setActiveTap("/my-shows");
            }}
          >
            Favorite Shows
          </Nav.Link>

          <Nav.Link
            className={activeTap === "/discover" ? "active" : ""}
            as={Link}
            to="discover"
            onClick={() => {
              setIcon(true);
              setActiveTap("/discover");
            }}
          >
            Discover
          </Nav.Link>

          <ProfileAndAuthButton />
        </Nav>
      </Container>
    </Navbar>
  );
}

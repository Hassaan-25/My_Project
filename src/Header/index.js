import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./styles.css";
import { FaUser } from "react-icons/fa";

function Header(props) {
  const { toggleLogin, toggleSignUp } = props;

  return (
    <>
      <ul className="main">
        <li className="myli">
          <Link to="/HomePage">Home</Link>
        </li>
        <li className="myli">
          <Link to="/LandPage">Fascilities</Link>
        </li>
        <li className="myli">
          <Link to="/ServicePage">Services</Link>
        </li>
        <li className="myli">
          <Link to="/ServicePage">Orders</Link>
        </li>
        <li className="myli">
          <Link to="/ServicePage">Contact Us</Link>
        </li>
        <div className="btncontainer">
          <Button className="btn default" onClick={toggleSignUp}>
            Sign Up
          </Button>
        </div>
        <div className="btncontainer">
          <Button className="btn default" onClick={toggleLogin}>
            <FaUser /> Log In
          </Button>
        </div>
      </ul>
    </>
  );
}

export default Header;

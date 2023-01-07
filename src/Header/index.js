import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FaUser } from "react-icons/fa";

function Header(props) {
  const { toggleLogin, toggleSignUp } = props;

  return (
    <>
      <ul className="main">
        <li className="myli ">
          <Link to="/HomePage" className="mylogo"></Link>
        </li>
        <li className="myli hover-underline-animation">
          <Link to="/HomePage">Home</Link>
        </li>
        <li className="myli hover-underline-animation">
          <Link to="/Facilities">Facilities</Link>
        </li>
        <li className="myli hover-underline-animation">
          <Link to="/ServicePage">Services</Link>
        </li>
        <li className="myli hover-underline-animation">
          <Link to="/ServicePage">Orders</Link>
        </li>
        <li className="myli hover-underline-animation">
          <Link to="/AboutUs">About Us</Link>
        </li>
        <div className="btncontainer">
          <button className="signup" onClick={toggleSignUp}>
            Sign Up
          </button>
        </div>
        <div className="btncontainer">
          <button className="login" onClick={toggleLogin}>
            <FaUser /> Log In
          </button>
        </div>
      </ul>
    </>
  );
}

export default Header;

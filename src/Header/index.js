import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { logout } from "../helpers/api";
import { FaUser } from "react-icons/fa";
import Cookies from "js-cookie";

function Header(props) {
  const { toggleLogin, toggleSignUp } = props;
  const token = Cookies.get("access_token");

  const handleLogOut = (e) => {
    e.preventDefault();
    logout()
      .then(() => {
        alert("User Logged Out Successfully");
      })
      .catch(() => {
        alert("Error while Logging Out ...");
      });
  };

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
          <Link to="/OrderPage">Orders</Link>
        </li>
        <li className="myli hover-underline-animation">
          <Link to="/AboutUs">About Us</Link>
        </li>
        {token ? (
          <div className="btncontainer">
            <button className="logout" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        ) : (
          <div className="btnhide">
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
          </div>
        )}
      </ul>
    </>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { logout } from "../helpers/api";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../Store/slices/appState";

function Header(props) {
  const dispatch = useDispatch();
  const { toggleLogin, toggleSignUp } = props;
  const { isLoggedIn } = useSelector((state) => state.appState);

  const handleLogOut = () => {
    logout()
      .then(() => {
        dispatch(userLogout());
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
        {isLoggedIn ? (
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

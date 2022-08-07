import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./styles.css";
import { FaUser } from "react-icons/fa";

function Header(props) {
  const { handleLogin, handleSignUp } = props;

  return (
    <>
      <nav>
        <ul className="main">
          <li>
            <Link to="/HomePage">Home</Link>
          </li>
          <li>
            <Link to="/LandPage">Fascilities</Link>
          </li>
          <li>
            <Link to="/ServicePage">Services</Link>
          </li>
          <li>
            <Link to="/ServicePage">Orders</Link>
          </li>
          <li>
            <Link to="/ServicePage">Contact Us</Link>
          </li>
          <div className="myli">
            <Button className="btn default" onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
          <div className="myli">
            <Button className="btn default" onClick={handleLogin}>
              <FaUser /> Log In
            </Button>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Header;

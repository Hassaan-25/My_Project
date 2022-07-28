import React, { useState } from "react";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import Landpage from "./Land_Page";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage";
import { Button, Modal } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/HomePage">HomePage</Link>
            </li>
            <li>
              <Link to="/LandPage">LandPage</Link>
            </li>
            <li>
              <Link to="/ServicePage">ServicePage</Link>
            </li>
            <li>
              <Link to="/ServicePage">Orders</Link>
            </li>
            <li>
              <Link to="/ServicePage">Contact Us</Link>
            </li>
            <div className="myli">
              <Button className="btn default" onClick={handleShow}>
                Sign Up
              </Button>
            </div>
            <div className="myli">
              <Button className="btn default" onClick={handleShow}>
                Log In
              </Button>
            </div>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Landpage />}></Route>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/ServicePage" element={<ServicesPage />}></Route>
          {/* <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<LoginPage />}></Route> */}
        </Routes>
      </BrowserRouter>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <LoginPage />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import Header from "./Header";
import { Modal } from "react-bootstrap";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header
          handleLogin={() => setShowLogin(true)}
          handleSignUp={() => setShowSignup(true)}
        />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/ServicePage" element={<ServicesPage />}></Route>
          {/* <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<LoginPage />}></Route> */}
        </Routes>
      </BrowserRouter>

      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Body>
          <LoginPage />
        </Modal.Body>
      </Modal>
      <Modal show={showSignup} onHide={() => setShowSignup(false)}>
        <Modal.Body>
          <SignUpPage />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;

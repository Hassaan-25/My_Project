import React from "react";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import Landpage from "./Land_Page";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
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
              <a href="signup">Sign up</a>
            </div>
            <div className="myli">
              <a href="signup">Log in</a>
            </div>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Landpage />}></Route>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/ServicePage" element={<ServicesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

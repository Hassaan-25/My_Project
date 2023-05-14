import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import Header from "./Header";
import Facilities from "./Facilities";
import OrderPage from "./OrderPage";
import AboutUs from "./AboutUs";
import PrivateRoute from "./PrivateRoute";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userLogin } from "./Store/slices/appState";
import MapContext from "./MapContext";

function App() {
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const toggleLogin = () => setShowLogin((prevState) => !prevState);
  const toggleSignUp = () => setShowSignup((prevState) => !prevState);

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token) {
      dispatch(userLogin());
    }
  }, [dispatch]);

  return (
    <div className="wrapper">
      <MapContext>
        <BrowserRouter>
          <Header toggleLogin={toggleLogin} toggleSignUp={toggleSignUp} />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/HomePage" element={<HomePage />}></Route>

            {/* <Route path="/OrderPage" element={<OrderPage />}></Route>
            <Route path="/Facilities" element={<Facilities />}></Route>
            <Route path="/ServicePage" element={<ServicesPage />}></Route> */}

            <Route
              path="/ServicePage"
              element={<PrivateRoute component={ServicesPage} />}
            ></Route>

            <Route
              path="/Facilities"
              element={<PrivateRoute component={Facilities} />}
            ></Route>
            <Route
              path="/AboutUs"
              element={<PrivateRoute component={AboutUs} />}
            ></Route>
            <Route
              path="/OrderPage"
              element={<PrivateRoute component={OrderPage} />}
            ></Route>
            {/* <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<LoginPage />}></Route> */}
          </Routes>
        </BrowserRouter>

        <Modal show={showLogin} onHide={() => setShowLogin(false)}>
          <Modal.Body>
            <LoginPage onClose={toggleLogin} />
          </Modal.Body>
        </Modal>
        <Modal show={showSignup} onHide={() => setShowSignup(false)}>
          <Modal.Body>
            <SignUpPage onClose={toggleSignUp} />
          </Modal.Body>
        </Modal>
      </MapContext>
    </div>
  );
}

export default App;

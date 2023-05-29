import "./styles.css";
import React, { useState } from "react";
import { login } from "../helpers/api";
import Cookie from "js-cookie";
import axios from "axios";
import "./styles.css";
import { useDispatch } from "react-redux";
import { userLogin } from "../Store/slices/appState";

function LoginPage(props) {
  const dispatch = useDispatch();
  const { onClose } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleformSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    const reqBody = { user: JSON.stringify(user) };
    login(reqBody)
      .then((res) => {
        const token = res?.Token;
        onClose();
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        Cookie.set("access_token", `${token}`, { expires: 14 });
        dispatch(userLogin());
        // setIsLoggedIn(true);
        // axios.get("/api/user").then((res) => {
        //   setUserName(res.data.username);
        // });

        alert("User logged in Successfully");
        // navigate("/Facilities");
      })
      .catch(() => {
        alert("Error while login ...");
      });
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleformSubmit}>
        <div className="input-container">
          <label>Email: </label>
          <input
            type="text"
            name="uname"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="input-container">
          <label>Password: </label>
          <input
            className="pswd-input"
            type="password"
            name="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-form">
      <div className="title">Log In</div>
      {renderForm}
    </div>
  );
}

export default LoginPage;

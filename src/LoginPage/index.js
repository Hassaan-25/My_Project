import "./styles.css";
import React, { useState } from "react";
import { login } from "../helpers/api";
import Cookie from "js-cookie";
import axios from "axios";
import "./styles.css";

function LoginPage(props) {
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
        // setIsLoggedIn(true);
        // axios.get("/api/user").then((res) => {
        //   setUserName(res.data.username);
        // });
        // navigate("/");

        alert("User logged in Successfully");
      })
      .catch(() => {
        alert("Error while login ...");
      });
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleformSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="uname"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
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

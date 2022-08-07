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
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleformSubmit = (e) => {
    e.preventDefault();
    const reqBody = {
      email,
      password,
    };
    const body = JSON.stringify({
      user: reqBody,
    });
    login(body)
      .then((res) => {
        console.log(res);
        const token = res?.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        Cookie.set("access_token", `${token}`, { expires: 14 });
        // navigate("/");
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
          {renderErrorMessage("uname")}
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
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-form">
      <div className="title">Login</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  );
}

export default LoginPage;

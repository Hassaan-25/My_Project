import React, { useState } from "react";
import { signup } from "../helpers/api";
import "./styles.css";

function SignUpPage(props) {
  const { onClose } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, confirmPassword);
    const reqBody = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };
    signup(reqBody)
      .then((res) => {
        console.log(res);
        onClose?.();
        // const token = res?.session?.access_token;
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // Cookie.set("access_token", `${token}`, { expires: 14 });
        // navigate("/");
      })
      .catch(() => {
        alert("Error while Signup ...");
      });
  };

  return (
    <div className="form">
      <div className="title">Sign Up</div>
      <form onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="username">
            <label className="form__label" htmlFor="firstName">
              First Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
              id="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div className="lastname">
            <label className="form__label" htmlFor="lastName">
              Last Name{" "}
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              value={lastName}
              className="form__input"
              onChange={(e) => handleInputChange(e)}
              placeholder="LastName"
              required
            />
          </div>
          <div className="email">
            <label className="form__label" htmlFor="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
              required
            />
          </div>
          <div className="password">
            <label className="form__label" htmlFor="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
              required
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
              placeholder="Confirm Password"
              required
            />
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default SignUpPage;

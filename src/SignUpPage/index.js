import React, { useState, useEffect } from "react";
import { signup } from "../helpers/api";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../Store/slices/mapState";

function SignUpPage(props) {
  const { currentUserLoc } = useSelector((state) => state.mapState);
  const { onClose } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [antigen, setAntigen] = useState("");
  const [cityName, setCityName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(setUserLocation(position.coords));
      },
      () => null,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, [dispatch]);

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
    if (id === "cityName") {
      setCityName(value);
    }
    if (id === "antigen") {
      setAntigen(value);
    }
    if (id === "contact") {
      setContact(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const user = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      confirmPassword,
      location: currentUserLoc,
      antigen,
      cityName,
      contact,
    };

    const reqBody = { user: JSON.stringify(user) };
    signup(reqBody)
      .then((res) => {
        onClose?.();
        alert("User Registered Successfully");
        setTimeout(() => {
          alert("Please Login to Continue ...");
        }, 1500);
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
          <div>
            <label className="form__label" htmlFor="antigen">
              Antigen:
            </label>
            <select
              id="antigen"
              className="form_select"
              value={antigen}
              onChange={(e) => setAntigen(e.target.value)}
              required
            >
              <option value="">Select Antigen</option>
              <option value="A+">A positive</option>
              <option value="A-">A negative</option>
              <option value="B+">B positive</option>
              <option value="B-">B negative</option>
              <option value="AB+">AB positive</option>
              <option value="AB-">AB negative</option>
              <option value="O+">O positive</option>
              <option value="O-">O negative</option>
            </select>
          </div>
          <div>
            <label className="form__label" htmlFor="cityName">
              City :
            </label>
            <select
              id="cityName"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              required
              className="form_select"
            >
              <option value="">Select City</option>
              <option value="islamabad">Islamabad</option>
              <option value="lahore">Lahore</option>
              <option value="multan">Multan</option>
              <option value="karachi">Karachi</option>
              <option value="sialkot">Sialkot</option>
              <option value="peshawar">Peshawar</option>
            </select>
          </div>
          <div className="contact">
            <label className="form__label" htmlFor="contact">
              Contact Number
            </label>
            <input
              className="form__input"
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => handleInputChange(e)}
              placeholder="Contact Number"
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
          <button className="signin_button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUpPage;

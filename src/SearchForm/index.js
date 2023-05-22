import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useDispatch } from "react-redux";
import { fetchUsersByCityAndAntigen } from "../helpers/api";
import { setUsers } from "../Store/slices/usersState";

function SearchForm() {
  const [antigen, setAntigen] = useState("");
  const [cityName, setCityName] = useState("");
  const [reqDate, setReqDate] = useState("");
  const [areaUnder, setareaUnder] = useState("");
  const [numBottles, setNumBottles] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetchedUsers = await fetchUsersByCityAndAntigen(cityName, antigen);
    console.log(fetchedUsers); // Print the fetched users in the console
    dispatch(setUsers(fetchedUsers));
    // Dispatch the action to set the Redux state with the fetched users
    navigate("/searchForm/OrderPage");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <label htmlFor="antigen">Required Blood Group:</label>
        <select
          id="antigen"
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
      <div className="form-group">
        <label htmlFor="cityName">Required Blood Group:</label>
        <select
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          required
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
      <div className="form-group">
        <label htmlFor="required-date">Date:</label>
        <input
          type="date"
          id="date"
          value={reqDate}
          onChange={(e) => setReqDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="area-under">Area Under:</label>
        <input
          type="number"
          id="area"
          value={areaUnder}
          onChange={(e) => setareaUnder(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="num-bottles">Number of Bottles:</label>
        <input
          type="number"
          id="bottles"
          value={numBottles}
          onChange={(e) => setNumBottles(e.target.value)}
          min="1"
          max="10"
          required
        />
      </div>
      <button className="search-form-btn" type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;

import React, { useState } from "react";
import "./styles.css";

function SearchForm() {
  const [antigen, setAntigen] = useState("");
  const [cityName, setCityName] = useState("");
  const [reqDate, setReqDate] = useState("");
  const [areaUnder, setareaUnder] = useState("");
  const [numBottles, setNumBottles] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Form submitted: ${antigen}, ${cityName}, ${reqDate}, ${areaUnder}, ${numBottles}`
    );
    // Send booking data to server or process it here
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
          <option value="A">A+</option>
          <option value="A">A-</option>
          <option value="B">B+</option>
          <option value="B">B-</option>
          <option value="AB">AB+</option>
          <option value="AB">AB-</option>
          <option value="O">O</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="destination">City</label>
        <input
          type="text"
          id="city"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter City"
          required
        />
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
        <label htmlFor="num-bottles">Passengers:</label>
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
      <button className="search-form-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;

import React, { useState, useEffect } from "react";
import "./styles.css";

function HomePage() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const fullText = "Welcome To Hemo";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    // Navigate to the "/Facilities" page
    window.location.href = "/Facilities";
  };

  return (
    <>
      <div className="LandPage_image"></div>
      <div className="icons">
        <a href="https://play.google.com/store/apps/details?id=com.cube.arc.blood&hl=en&gl=US">
          <div className="gplay"></div>
        </a>
        <a href="https://apps.apple.com/us/app/blood-donor-american-red-cross/id911428916">
          <div className="aplay"></div>
        </a>
      </div>
      <div className="text_big">{displayText}</div>
      <div className="text_small">
        The Hemo platform has the potential to significantly impact the blood
        donation process in Pakistan by providing a more convenient and
        accessible way for donors to find blood banks and hospitals.
        <button className="navbtn" onClick={handleButtonClick}>
          Request Blood Now
        </button>
      </div>

      <div className="Landpage_footer"></div>
    </>
  );
}

export default HomePage;

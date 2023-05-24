// import React, { useState, useEffect } from "react";
// import { fetchUsers } from "../helpers/api";
import "./styles.css";
import Footer from "../Footer";

function AboutUs() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetchUsers()
  //     .then((res) => {
  //       setUsers(res);
  //     })
  //     .catch(() => {
  //       alert("Error while login ...");
  //     });
  // }, []);

  const handleclick = () => {
    window.location.href = "/ServicePage";
  };

  return (
    <>
      <div className="aboutus_img"></div>
      <div className="container_aboutus">
        <div className="heading_aboutus">About Us</div>
        <div className="head_aboutus">Who are we?</div>
        <div className="txt_aboutus">
          At Hemo, our mission is to save lives by facilitating the process of
          blood donation. We aim to bridge the gap between blood donors and
          those who require specific blood types in times of emergencies or
          medical treatments. Our platform leverages the power of technology to
          make blood donation more accessible, efficient, and effective.
          <br />
          <br />
          Join us on this meaningful journey of blood donation and help us
          create a world where everyone has access to life-saving blood
          transfusions.
        </div>
        <button onClick={handleclick} className="btn_aboutus">
          Learn More..
        </button>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;

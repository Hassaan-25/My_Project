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

  return (
    <>
      <div className="aboutus_img"></div>
      <div className="container_aboutus">
        <div className="heading_aboutus">About Us</div>
        <div className="head_aboutus">Who are we?</div>
        <div className="txt_aboutus">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages.
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages.
        </div>
        <button className="btn_aboutus">Learn More..</button>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;

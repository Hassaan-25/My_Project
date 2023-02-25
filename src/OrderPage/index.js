// import React, { useState, useEffect } from "react";
// import { fetchUsers } from "../helpers/api";
import "./styles.css";
import MapComp from "../map";

function OrderPage() {
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
      <div className="orders_wrapper">
        <div className="map_container">
          <MapComp />
          <p>Map Here</p>
        </div>
      </div>
    </>
  );
}

export default OrderPage;

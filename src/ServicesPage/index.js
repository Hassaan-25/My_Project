import React, { useState, useEffect } from "react";
import { fetchUsers } from "../helpers/api";
import "./styles.css";
import Footer from "../Footer";
// import MapContainer from "../map";

function ServicePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch(() => {
        alert("Error while login ...");
      });
  }, []);

  return (
    <>
      <div className="Service_wrapper">
        <div className="partition_wrapper">
          <h2>Users Logged IN</h2>
          {users.map((user, index) => {
            return (
              <ul>
                <li>
                  <span>{user.first_name}</span>
                  <span>&nbsp;{user.last_name}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="partition_wrapper">
          <p>Map Here</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServicePage;

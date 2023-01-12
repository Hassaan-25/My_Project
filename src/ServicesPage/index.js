import React, { useState, useEffect } from "react";
import { fetchUsers } from "../helpers/api";
import "./styles.css";
import Footer from "../Footer";

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
      <div className="service_form">
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
      <Footer />
    </>
  );
}

export default ServicePage;

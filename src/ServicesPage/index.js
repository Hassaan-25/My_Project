import React, { useState, useEffect } from "react";
import { fetchUsers, fetchUsersByCityAndAntigen } from "../helpers/api";
import "./styles.css";
import Footer from "../Footer";
function ServicePage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch(() => {
        alert("Error while fetching all users ...");
      });
  }, []);

  useEffect(() => {
    fetchUsersByCityAndAntigen("islamabad", "AB+")
      .then((res) => {
        console.log(res);
        setFilteredUsers(res);
        console.log(res);
      })
      .catch(() => {
        alert("Error while users by city ...");
      });
  }, []);
  return (
    <>
      <div className="Service_wrapper">
        <div className="service_partition_wrapper">
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
        <div className="service_partition_wrapper">
          {filteredUsers.map((user, index) => {
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
      </div>
      <Footer />
    </>
  );
}

export default ServicePage;

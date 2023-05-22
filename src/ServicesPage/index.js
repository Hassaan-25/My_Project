import React, { useState, useEffect } from "react";
import { fetchUsersByCityAndAntigen } from "../helpers/api";
import { useSelector } from "react-redux";
import "./styles.css";
import Footer from "../Footer";

function ServicePage() {
  // const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const users = useSelector((state) => state.usersState.users);

  useEffect(() => {
    console.log("asasdsadsadsaasdsad", users);
  }, [users]);

  useEffect(() => {
    fetchUsersByCityAndAntigen("islamabad", "AB+")
      .then((res) => {
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
                  <span>&nbsp;{user.cityName}</span>
                </li>
              </ul>
            );
          })}
          {/* <ul>
            {users.map((user) => (
              <li key={user._id}>
                {user.first_name} {user.last_name} - {user.location.latitude},{" "}
                {user.location.longitude}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="service_partition_wrapper">
          {filteredUsers.map((user) => {
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

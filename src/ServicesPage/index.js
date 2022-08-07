import React, { useState, useEffect } from "react";
import { fetchUsers } from "../helpers/api";
import "./styles.css";
import Footer from "../Footer";

function ServicePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Service Page Rendered");
    fetchUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch(() => {
        alert("Error while login ...");
      });
  }, []);
  console.log(users);

  return (
    <>
      <div className="myform">
        {users.map((user) => {
          console.log(user);
          return (
            <h1>
              <span>{user.first_name}</span>
              <span>{user.last_name}</span>
            </h1>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default ServicePage;

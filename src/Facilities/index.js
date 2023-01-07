// import React, { useState, useEffect } from "react";
// import { fetchUsers } from "../helpers/api";
import SearchForm from "../SearchForm";
import "./styles.css";
import Footer from "../Footer";

function ServicePage() {
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
      {/* <div className="myform">
        {users.map((user, index) => {
          return (
            <ul>
              <span>{user.first_name}</span>
              <span>{user.last_name}</span>
            </ul>
          );
        })}
      </div> */}
      <SearchForm />
      <Footer />
    </>
  );
}

export default ServicePage;

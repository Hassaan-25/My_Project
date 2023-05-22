import React from "react";
// import { fetchUsers } from "../helpers/api";
import SearchForm from "../SearchForm";
import "./styles.css";
import Footer from "../Footer";
import MapComp from "../map";

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
      <div className="container">
        <div className="row">
          {/* <div className="column">
            
          </div> */}
          <div className="column">
            <div className="filterContainer">
              <SearchForm />
            </div>
            <MapComp />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServicePage;

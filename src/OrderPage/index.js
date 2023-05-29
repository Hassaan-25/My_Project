import React, { useState } from "react";
import "./styles.css";
import MapComp from "../map";
import { useMapContext } from "../MapContext";
import UserDetailModal from "../components/UserDetailModal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function OrderPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { actions } = useMapContext();
  const { users } = useSelector((state) => state.usersState);
  // const { matrixData } = useSelector((state) => state.matrixState);
  const { updateSelectedUser, removeDirections } = actions;
  const navigate = useNavigate();

  useEffect(() => {
    handleRemoveDirections();
  });

  const handleRemoveDirections = () => {
    removeDirections();
  };

  const handleUserSelect = (user) => {
    updateSelectedUser(user);
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // console.log("matrixData", matrixData);
  function compareUsers(a, b) {
    // Convert distance strings to numbers
    const distanceA = parseFloat(a.distance);
    const distanceB = parseFloat(b.distance);

    // Convert duration strings to numbers
    const durationA = parseInt(a.duration);
    const durationB = parseInt(b.duration);

    // Compare based on distance
    if (distanceA < distanceB) {
      return -1;
    } else if (distanceA > distanceB) {
      return 1;
    }

    // If distances are equal, compare based on duration
    if (durationA < durationB) {
      return -1;
    } else if (durationA > durationB) {
      return 1;
    }

    // If both distance and duration are equal, maintain original order
    return 0;
  }

  // Sort the users array based on the custom comparison function
  const sortedUsers = [...users].sort(compareUsers);

  const handleBackToSearch = () => {
    navigate("/Facilities");
  };
  // console.log(matrixDataArray);

  return (
    <>
      <div className="Service_wrapper">
        <div className="order_partition_wrapper">
          <h2>Best Donors Found:</h2>
          {sortedUsers.map((user, index) => {
            return (
              <ul key={index}>
                <li className="list-item">
                  <span className="name">
                    {user.first_name} {user.last_name}
                  </span>
                  <span className="bloodGroup">{user.antigen}</span>
                  <span className="city">{user.cityName}</span>

                  <span>
                    <button
                      className="orderbtn"
                      onClick={() => handleUserSelect(user)}
                    >
                      Select
                    </button>
                  </span>
                </li>
              </ul>
            );
          })}
          {selectedUser && (
            <UserDetailModal isOpen={showModal} onToggle={closeModal} />
          )}
          <button className="back-btn" onClick={handleBackToSearch}>
            Back to search
          </button>
        </div>
        <div className="order_partition_wrapper">
          <div className="mapcontainer">
            <MapComp />
            <button className="clear-btn" onClick={handleRemoveDirections}>
              Clear Directions
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;

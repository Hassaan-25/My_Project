import React, { useState } from "react";
import "./styles.css";
import MapComp from "../map";
import { useMapContext } from "../MapContext";
import UserDetailModal from "../components/UserDetailModal";
import { useSelector } from "react-redux";

export function OrderPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { actions } = useMapContext();
  const { users } = useSelector((state) => state.usersState);
  const { matrixData } = useSelector((state) => state.matrixState);
  const { updateSelectedUser, removeDirections } = actions;

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

  console.log("matrixData", matrixData);

  console.log(users);
  const matrixDataArray = Object.values(matrixData);

  // Assuming matrixData is an array containing the objects you provided

  matrixDataArray.sort((a, b) => {
    const aDistance = parseFloat(a.distance);
    const bDistance = parseFloat(b.distance);
    const aDuration = parseFloat(a.duration);
    const bDuration = parseFloat(b.duration);

    // Compare the distances first
    if (aDistance < bDistance) {
      return -1;
    } else if (aDistance > bDistance) {
      return 1;
    }

    // If distances are equal, compare the durations
    if (aDuration < bDuration) {
      return -1;
    } else if (aDuration > bDuration) {
      return 1;
    }

    return 0; // If distances and durations are equal, maintain the original order
  });

  console.log(matrixDataArray);

  return (
    <>
      <div className="Service_wrapper">
        <div className="order_partition_wrapper">
          <h2>Best Donors Found:</h2>
          {matrixDataArray.map((user, index) => {
            return (
              <ul key={index}>
                <li className="list-item">
                  <span className="name">
                    {user.first_name} {user.last_name}
                  </span>
                  <span className="bloodGroup">{user.antigen}</span>
                  <span className="city">{user.cityName}</span>
                  <span className="contactNum">{user.contact}</span>

                  <span>
                    <button
                      className="orderbtn"
                      onClick={() => handleUserSelect(user)}
                    >
                      Show
                    </button>
                  </span>
                </li>
              </ul>
            );
          })}
          {selectedUser && (
            <UserDetailModal isOpen={showModal} onToggle={closeModal} />
          )}
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

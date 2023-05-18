import React, { useState } from "react";
import "./styles.css";
import MapComp from "../map";
// import { users } from "./static";
import { useMapContext } from "../MapContext";
import UserDetailModal from "../components/UserDetailModal";
import { useSelector } from "react-redux";

export function OrderPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { actions } = useMapContext();
  const { users } = useSelector((state) => state.usersState);
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

  console.log(users);

  return (
    <>
      <div className="Service_wrapper">
        <div className="order_partition_wrapper">
          <h2>Best Donors Found:</h2>
          {users.map((user, index) => {
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

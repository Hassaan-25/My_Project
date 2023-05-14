import React, { useState } from "react";
import "./styles.css";
import MapComp from "../map";
import { users } from "./static";
import { useMapContext } from "../MapContext";
import UserDetailModal from "../components/UserDetailModal";

export function OrderPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { actions } = useMapContext();
  const { updateSelectedUser } = actions;

  const handleUserSelect = (user) => {
    updateSelectedUser(user);
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="Service_wrapper">
        <div className="order_partition_wrapper">
          <h2>Best Donors Found:</h2>
          {users.map((user, index) => {
            return (
              <ul key={index}>
                <li className="list-item">
                  <span className="name">{user.name}</span>
                  <span className="bloodGroup">{user.bloodGroup}</span>
                  <span className="city">{user.city}</span>
                  <span className="contactNum">{user.contactNum}</span>

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
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;

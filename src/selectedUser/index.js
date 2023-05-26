import React from "react";
import { useMapContext } from "../MapContext";
import MapComp from "../map";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const SelectedDonorComponent = () => {
  const { selectedUser } = useMapContext();
  const navigate = useNavigate();
  const handleBackToSearch = () => {
    navigate("/searchForm/OrderPage");
  };

  return (
    <>
      <div className="Service_wrapper">
        <div className="order_partition_wrapper">
          <h2 className="selected-donor-heading">Selected Donor</h2>
          <p className="selected-donor-info">
            Name :
            <span className="info-values">
              {" "}
              {selectedUser.first_name} {selectedUser.last_name}
            </span>
          </p>
          <h2 className="selected-donor-heading">Donor Details</h2>
          <div className="selected_donor_details">
            <p className="selected-donor-info">
              Blood Group:{" "}
              <span className="info-values">{selectedUser.antigen}</span>
            </p>
            <p className="selected-donor-info">
              Email:<span className="info-values">{selectedUser.email}</span>
            </p>
            <p className="selected-donor-info">
              Contact Number:{" "}
              <span className="info-values">{selectedUser.contact}</span>
            </p>
            <p className="selected-donor-info">
              Distance to the donor:{" "}
              <span className="info-values">{selectedUser.distance}</span>
            </p>
            <p className="selected-donor-info">
              Duration to reach donor :{" "}
              <span className="info-values">{selectedUser.duration}</span>
            </p>
          </div>
          <button className="back-btn" onClick={handleBackToSearch}>
            Back to search
          </button>
        </div>

        <div className="order_partition_wrapper">
          <div className="mapcontainer">
            <MapComp />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedDonorComponent;

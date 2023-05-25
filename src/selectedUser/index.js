import React from "react";
import { useMapContext } from "../MapContext";
import MapComp from "../map";
import "./styles.css";
const SelectedDonorComponent = () => {
  const { selectedUser } = useMapContext();

  return (
    <>
      <div className="Service_wrapper">
        <div className="order_partition_wrapper">
          <h2 className="selected-donor-heading">Selected Donor</h2>
          <p className="selected-donor-info">
            Name :
            <span>
              {" "}
              {selectedUser.first_name} {selectedUser.last_name}
            </span>
          </p>
          <h2 className="selected-donor-heading">Donor Details</h2>
          <div className="selected_donor_details">
            <p className="selected-donor-info">
              Blood Group: {selectedUser.antigen}
            </p>
            <p className="selected-donor-info">Email: {selectedUser.email}</p>
            <p className="selected-donor-info">
              Contact Number: {selectedUser.contact}
            </p>
            <p className="selected-donor-info">
              Distance to the donor: {selectedUser.distance}
            </p>
            <p className="selected-donor-info">
              Duration to reach donor : {selectedUser.duration}
            </p>
          </div>
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

import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useMapContext } from "../../MapContext";
import { useNavigate } from "react-router-dom";

const UserDetailModal = (props) => {
  const { isOpen, onToggle } = props;

  const { fetchDirections, selectedUser } = useMapContext();
  const navigate = useNavigate();

  const handleSelectDonor = () => {
    navigate("/searchForm/OrderPage/selectedDonor/:id");
  };

  const buttonStyle = {
    background: "#1E2D50",
    borderRadius: "5px",
  };
  const blurredTextStyle = {
    filter: "blur(2.2px)", // Apply blur effect
  };

  return (
    <Modal show={isOpen} onHide={onToggle}>
      <Modal.Body>
        <h2>
          <span>{selectedUser.first_name}</span>{" "}
          <span>{selectedUser.last_name}</span>
        </h2>
        <p>Blood Group : {selectedUser.antigen}</p>
        <p>
          Email: <span style={blurredTextStyle}>{selectedUser.email}</span>
        </p>
        <p>
          Contac: <span style={blurredTextStyle}>{selectedUser.contact}</span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="Modal-btn" onClick={onToggle} style={buttonStyle}>
          Close
        </Button>
        <Button
          className="Modal-btn"
          style={buttonStyle}
          onClick={() => {
            fetchDirections(selectedUser.location);
            onToggle();
            handleSelectDonor();
          }}
        >
          SELECT DONOR
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default UserDetailModal;

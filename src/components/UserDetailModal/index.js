import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useMapContext } from "../../MapContext";

const UserDetailModal = (props) => {
  const { isOpen, onToggle } = props;

  const { fetchDirections, selectedUser } = useMapContext();

  return (
    <Modal show={isOpen} onHide={onToggle}>
      <Modal.Body>
        <h2>{selectedUser.name}</h2>
        <p>Blood Group : {selectedUser.bloodGroup}</p>
        <p>Email : {selectedUser.email}</p>
        <p>Contact Number : {selectedUser.contactNum}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="Modal-btn" onClick={onToggle}>
          Close
        </Button>
        <Button
          className="Modal-btn"
          onClick={() => {
            fetchDirections(selectedUser.location);
            onToggle();
          }}
        >
          SELECT DONOR
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserDetailModal;

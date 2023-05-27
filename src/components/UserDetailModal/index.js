import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useMapContext } from "../../MapContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetailModal = (props) => {
  const { isOpen, onToggle } = props;
  const { currentUserLoc } = useSelector((state) => state.mapState);
  const { fetchDirections, selectedUser } = useMapContext();
  const navigate = useNavigate();

  console.log(currentUserLoc.latitude, currentUserLoc.longitude);

  const handleSelectDonor = async () => {
    try {
      const response = await fetch(
        "https://putlb.localto.net/api/user/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipientEmail: selectedUser.email,
            recipientName: `${selectedUser.first_name} ${selectedUser.last_name}`,
            lat: currentUserLoc.latitude,
            lng: currentUserLoc.longitude,
            time: selectedUser.duration,
            distance: selectedUser.distance,
          }),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }

      fetchDirections(selectedUser.location);
      onToggle();
      navigate("/searchForm/OrderPage/selectedDonor/:id");
    } catch (error) {
      console.error("Error sending email:", error);
    }
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

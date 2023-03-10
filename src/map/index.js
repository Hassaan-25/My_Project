import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  // useJsApiLoader,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../Store/slices/mapState";
import { Modal, Button } from "react-bootstrap";
import { users } from "./static";

const libraries = ["places"];
const mapContainerStyle = {
  height: "80vh",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 33.6326,
  lng: 72.978,
};

const apiKey = "AIzaSyCFfOLtD3ADMvsUO4NxgFBymhMX_oOdMXc";

function MyComponent() {
  const { currentUserLoc } = useSelector((state) => state.mapState);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(setUserLocation(position.coords));
      },
      () => null,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, [dispatch]);

  const closeModal = () => setShowModal(false);

  console.log(currentUserLoc);

  return isLoaded ? (
    <GoogleMap
      id={currentUserLoc}
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={center}
      options={options}
    >
      {currentUserLoc?.latitude && currentUserLoc?.longitude && (
        <Marker
          position={{
            lat: currentUserLoc.latitude,
            lng: currentUserLoc.longitude,
          }}
          icon={{
            url: "https://www.linkpicture.com/q/favicon_41.png",
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      )}
      {users.map((user) => (
        <Marker
          key={user.id}
          position={{
            lat: user.location.latitude,
            lng: user.location.longitude,
          }}
          icon={{
            url: "https://www.linkpicture.com/q/favicon_41.png",
            scaledSize: new window.google.maps.Size(30, 30),
          }}
          onClick={() => {
            setSelectedUser(user);
            setShowModal(true);
          }}
        />
      ))}
      {/* {selectedUser && (
        <InfoWindow
          position={{
            lat: selectedUser.location.latitude,
            lng: selectedUser.location.longitude,
          }}
          onCloseClick={() => setSelectedUser(null)}
        >
          <div>
            <p>{selectedUser.name}</p>
            <p>{selectedUser.email}</p>
            <p>{selectedUser.bloodGroup}</p>
          </div>
        </InfoWindow>
      )} */}
      {selectedUser && (
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Body>
            <h2>{selectedUser.name}</h2>
            <p>{selectedUser.email}</p>
            <p>{selectedUser.bloodGroup}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button className="Modal-btn" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}
export default React.memo(MyComponent);

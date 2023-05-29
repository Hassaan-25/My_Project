import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  DirectionsRenderer,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../Store/slices/mapState";
// import { users } from "./static";
import "./styles.css";
import { useMapContext } from "../MapContext";
// import { setMatrixData } from "../Store/slices/matrixState";
import { setUsers } from "../Store/slices/usersState";

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

const apiKey = "AIzaSyDrTIQheaZysE2lJqKT1LT7EhUQlAazvJ4";

function MapPage(props) {
  const { actions, directions } = useMapContext();
  const { updateSelectedUser } = actions;
  const { currentUserLoc } = useSelector((state) => state.mapState);
  const [userDistances, setUserDistances] = useState("");
  const [hoveredMarkerIndex, setHoveredMarkerIndex] = useState(null);
  const users = useSelector((state) => state.usersState.users);
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  useEffect(() => {
    if (isLoaded) {
      const fetchDistances = async () => {
        // Get the user location
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          });
        });
        // Set the user location in redux

        dispatch(setUserLocation(position.coords));
        // Check if Google Maps API is loaded
        if (window.google && window.google.maps) {
          const currentUserLoc = position.coords;
          const service = new window.google.maps.DistanceMatrixService();
          service.getDistanceMatrix(
            {
              destinations: users.map(
                (user) => `${user.location.latitude},${user.location.longitude}`
              ),
              origins: [
                { lat: currentUserLoc.latitude, lng: currentUserLoc.longitude },
              ],
              travelMode: "DRIVING",
            },
            (response, status) => {
              if (status === "OK") {
                const distances = response.rows[0].elements.map((element) => ({
                  distance: element.distance.text,
                  duration: element.duration.text,
                }));
                setUserDistances(distances);
                const mergedArray = [];
                distances.forEach((distance, index) => {
                  mergedArray[index] = {
                    ...distance,
                    ...users[index],
                  };
                });
                dispatch(setUsers(mergedArray));
              } else {
                console.log("Error:", status);
              }
            }
          );
        } else {
          console.log("Google Maps API not loaded");
        }
      };
      fetchDistances();
    }
  }, [dispatch, users, isLoaded]);

  return isLoaded ? (
    <>
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
              url: "https://www.linkpicture.com/q/icons8-map-marker-32.png",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
          />
        )}
        {users.length > 0 ? (
          users.map((user, index) => (
            <Marker
              key={user.id}
              position={{
                lat: Number(user.location.latitude),
                lng: Number(user.location.longitude),
              }}
              icon={{
                url: "https://www.linkpicture.com/q/favicon_41.png",
                scaledSize: new window.google.maps.Size(25, 25),
              }}
              onClick={() => {
                // setSelectedUser(user);
                // setShowModal(true);
                updateSelectedUser(user);
              }}
              onMouseOver={() => setHoveredMarkerIndex(index)}
              onMouseOut={() => setHoveredMarkerIndex(null)}
            >
              {hoveredMarkerIndex === index && userDistances.length > 0 && (
                <InfoWindow>
                  <div>
                    <p>{user.first_name}</p>
                    <p>Distance: {userDistances[index].distance}</p>
                    <p>Duration: {userDistances[index].duration}</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))
        ) : (
          <div>Loading</div>
        )}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </>
  ) : (
    <div>Loading...</div>
  );
}

export default MapPage;

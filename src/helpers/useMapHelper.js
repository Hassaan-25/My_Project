import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

const useMapHelper = () => {
  const { currentUserLoc } = useSelector((state) => state.mapState);
  const [selectedUser, setSelectedUser] = useState({
    id: 0,
    name: "Abdullah",
    email: "abdullah@example.com",
    password: "password0",
    bloodGroup: "A+",
    contactNum: "03107702635",
    location: {
      latitude: 33.6588,
      longitude: 72.88,
    },
  });
  const [directions, setDirections] = useState(null);

  const fetchDirections = useCallback(async () => {
    const directionsService = new window.google.maps.DirectionsService();

    const origin = new window.google.maps.LatLng(
      currentUserLoc.latitude,
      currentUserLoc.longitude
    );

    const destination = new window.google.maps.LatLng(
      selectedUser.location.latitude,
      selectedUser.location.longitude
    );

    const request = {
      origin,
      destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }, [currentUserLoc]);

  useEffect(() => {
    fetchDirections();
  }, [fetchDirections]);

  return { directions };
};

export default useMapHelper;

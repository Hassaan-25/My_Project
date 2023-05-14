import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  // useEffect,
} from "react";
import { useSelector } from "react-redux";

export const MapContext = React.createContext({
  selectedUser: null,
  directions: null,
  fetchDirections: () => {},
  actions: {
    setSelectedUser: () => {},
  },
});

const MapContainer = React.memo((props) => {
  const { children } = props;
  const { currentUserLoc } = useSelector((state) => state.mapState);
  const [selectedUser, setSelectedUser] = useState(null);
  const [directions, setDirections] = useState(null);
  // const [userDistances, setUserDistances] = useState("");

  // useEffect(() => {
  //   console.log("userDistances", userDistances);
  // }, [userDistances]);

  const fetchDirections = useCallback(
    async (userLoc) => {
      console.log("inside fetchDirections");
      const directionsService = new window.google.maps.DirectionsService();

      const origin = new window.google.maps.LatLng(
        currentUserLoc.latitude,
        currentUserLoc.longitude
      );

      const destination = new window.google.maps.LatLng(
        userLoc.latitude,
        userLoc.longitude
      );

      const request = {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          console.log("result", result);
          setDirections(result);
        } else {
          console.log(status);
          console.error(`error fetching directions ${result}`);
        }
      });
    },
    [currentUserLoc]
  );

  const value = useMemo(
    () => ({
      selectedUser,
      directions,
      // userDistances,
      fetchDirections,
      actions: {
        updateSelectedUser: setSelectedUser,
        // setUserDistances,
      },
    }),
    [selectedUser, directions, fetchDirections]
  );
  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
});

export const useMapContext = () => {
  const mapContext = useContext(MapContext);
  return mapContext;
};

export default MapContainer;

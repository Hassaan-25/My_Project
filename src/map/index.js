import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  // OverlayView,
} from "@react-google-maps/api";

const center = {
  lat: 33.6221,
  lng: 72.9595,
};

// const MapMarker = React.memo(({ color, text, location }) => {
//   return (
//     <OverlayView
//       mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//       position={location}
//       // getPixelPositionOffset={getPixelPositionOffset}
//     >
//       <span className="marker-container">
//         <span className="stack-item marker-icon-text ">{text}</span>
//       </span>
//     </OverlayView>
//   );
// });

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDai50O1JJN5mgRPVI4qb7kr7SUxDZvpnA",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: "80vh" }}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
        icon={
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        }
        position={center}
      />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);

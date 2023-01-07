import React from "react";
import * as vehicleActions from "../../store/vehicles";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

function MyMap() {
  const dispatch = useDispatch();
  const currentVehicles = useSelector((state) => state.vehicle.allVehicles);
  const vehiclesObj = Object.values(currentVehicles);
  console.log(vehiclesObj);

  const containerStyle = {
    width: "560px",
    height: "730px",
  };

  const center = {
    lat: 34.06220174258613,
    lng: -118.36138455990302,
  };

  const position = {
    lat: 34.06220174258613,
    lng: -118.36138455990302,
  };

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  useEffect(() => {
    dispatch(vehicleActions.allVehiclesThunk());
  }, [dispatch]);

  const onClick = (vehicle) => {
    <Link to={`/cars/${vehicle.id}`} />
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyCRSvlDSkCRnK_ceW4Vscl0-6QKmIRXSZY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        clickableIcons={true}
      >
        <Marker
          onLoad={onLoad}
          position={position}
          visible={true}
          icon={<i className="fa-solid fa-location-dot"></i>}
          // clickable={true}
        />
        {/* <div className="card"> */}
        {vehiclesObj.map((vehicle) => (
          // <Link to={`/cars/${vehicle.id}`}>
            <Marker
              onLoad={onLoad}
              position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
              vehicle={vehicle}
              icon={<i className="fa-solid fa-location-pin"/>}
              clickable = {true}
              onClick={onClick}
            />
          // </Link>
        ))}
        {/* // </div> */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;

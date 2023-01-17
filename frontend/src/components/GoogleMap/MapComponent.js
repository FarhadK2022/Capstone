import React from "react";
import * as vehicleActions from "../../store/vehicles";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./maps.css"

function MyMap() {
  const dispatch = useDispatch();
  const currentVehicles = useSelector((state) => state.vehicle.allVehicles);
  const vehiclesObj = Object.values(currentVehicles);

  const containerStyle = {
    width: "560px",
    height: "730px",
  };

  const  homeBaseImage = <image className="fa-solid fa-location-dot"/>

  const positionImage = <image className="fa-solid fa-location-pin"/>

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
        className='maps'
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
        clickableIcons={true}
      >
        <Marker
          onLoad={onLoad}
          position={position}
          visible={true}
          icon={homeBaseImage}
          clickable={true}
        />

        {vehiclesObj.map((vehicle) => (
            <Marker
              onLoad={onLoad}
              position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
              vehicle={vehicle}
              icon={positionImage}
              clickable = {true}
              onClick={() => {onClick(vehicle)}}
            />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;

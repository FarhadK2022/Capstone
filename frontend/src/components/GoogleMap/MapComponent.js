import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Autocomplete,
} from "@react-google-maps/api";
import * as vehicleActions from "../../store/vehicles";
import VehicleCardAll from "../VehicleCard/index";
import "./maps.css";

function MyMap() {
  const dispatch = useDispatch();
  const currentVehicles = useSelector((state) => state.vehicle.allVehicles);
  const vehiclesObj = Object.values(currentVehicles);
  const [activeMarker, setActiveMarker] = useState(null);


  useEffect(() => {
    dispatch(vehicleActions.allVehiclesThunk());
  }, [dispatch]);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const containerStyle = {
    width: "560px",
    height: "730px",
  };

  const image = '<img className="fa-solid fa-location-pin" />';

  let position = {
    lat: 34.06220174258613,
    lng: -118.36138455990302,
  };
  const handleNewPlace = (autocomplete) => {
    console.log(autocomplete)
    return position = autocomplete
  }

  const divStyle = {
    background: `white`,

    padding: 15,
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCRSvlDSkCRnK_ceW4Vscl0-6QKmIRXSZY"
      libraries={["places"]}
    >
      <GoogleMap
        className="maps"
        mapContainerStyle={containerStyle}
        center={position}
        zoom={8}
        clickableIcons={true}
        onClick={() => setActiveMarker(null)}

      >
        <Autocomplete>
          <input
            type="text"
            placeholder="Search..."
            onSubmit={(e) => handleNewPlace(e.target.value)}
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `280px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `15px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "59%",
              marginLeft: "-120px",
              top:"10px"
            }}
          />
        </Autocomplete>

        {vehiclesObj.map((vehicle) => (
          <Marker
            key={vehicle.id}
            value={vehicle.id}
            setLabel={vehicle.id}
            position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
            vehicle={vehicle}
            setIcon={image}
            clickable={true}
            animation={"DROP"}
            onClick={() => handleActiveMarker(vehicle.id)}
          >
            {activeMarker === vehicle.id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div style={divStyle}>
                  <Link to={`/cars/${vehicle.id}`}>
                    <div className="map-card" key={vehicle.id} value={vehicle.id}>
                      <VehicleCardAll vehicle={vehicle} />
                    </div>
                  </Link>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;

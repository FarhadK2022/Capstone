import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import * as vehicleActions from "../../store/vehicles";
import VehicleCardAll from "../VehicleCard/index";
import "./maps.css";

function MyMap() {
  const dispatch = useDispatch();
  const currentVehicles = useSelector((state) => state.vehicle.allVehicles);
  const vehiclesObj = Object.values(currentVehicles);
  const [activeMarker, setActiveMarker] = useState(null);
  const [position, setPosition] = useState({
    lat: 34.06220174258613,
    lng: -118.36138455990302,
  });
  const [address, setAddress] = useState("");

  useEffect(() => {
    dispatch(vehicleActions.allVehiclesThunk());
  }, [dispatch]);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(`${address}`)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setPosition(latLng))
      .catch((error) => console.error("Error", error));
  };

  const containerStyle = {
    width: "560px",
    height: "730px",
    postion: "fixed",
  };

  const divStyle = {
    background: `white`,
    padding: 15,
  };

  return (
    <GoogleMap
      className="maps"
      mapContainerStyle={containerStyle}
      center={position}
      zoom={9}
      clickableIcons={true}
      onClick={() => setActiveMarker(null)}
    >
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                type: "search",
                placeholder: "Search Locations...",
                // role: "combobox",
                style: {
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `300px`,
                  height: `32px`,
                  padding: `0 12px`,
                  borderRadius: `15px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                  position: "absolute",
                  left: "57%",
                  marginLeft: "-120px",
                  top: "10px",
                },
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div style={{backgroundColor: "white"}}>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      {vehiclesObj.map((vehicle) => (
        <Marker
        className='marker'
          key={vehicle.id}
          value={vehicle.id}
          setLabel={vehicle.id}
          position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
          vehicle={vehicle}
          icon={{url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}}
          clickable={true}
          onClick={() => handleActiveMarker(vehicle.id)}

        >{console.log(vehicle.latitude)}
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
    // </LoadScript>
  );
}

export default MyMap;

import React from "react";
import * as vehicleActions from "../../store/vehicles";
import * as reviewActions from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VehicleCardAll from "../VehicleCard";
import "./spots.css";

function GetAllVehiclesPage() {
  const dispatch = useDispatch();
  const currentVehicles = useSelector((state) => state.vehicle.allVehicles);
  const vehiclesObj = Object.values(currentVehicles);
  
  useEffect(() => {
    dispatch(vehicleActions.allVehiclesThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(reviewActions.clearReviewsThunk());
  });
  if (!currentVehicles) {
    return null;
  }

  return (
    <>
      <div className="spots-list">
        {vehiclesObj.map((vehicle) => (
          <Link to={`/vehicles/${vehicle.id}`}>
            <div className="card" key={vehicle.id} value={vehicle.id}>
              <VehicleCardAll vehicle={vehicle} />
            </div>
          </Link>
        ))}
      </div>
      <footer className="footer">
        <p>Developed By Farhad Koushan</p>
      </footer>
    </>
  );
}

export default GetAllVehiclesPage;

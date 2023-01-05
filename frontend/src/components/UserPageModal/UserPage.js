import React from "react";
import * as vehicleActions from "../../store/vehicles";
import * as reviewActions from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReviewCard from "../ReviewCard";
import VehicleCardUser from "../VehicleCard/UserPageCards";


function UserPage(){
  const dispatch = useDispatch();
  const currentVehicles = useSelector((state) => state.vehicle.allVehicles);
  const vehiclesObj = Object.values(currentVehicles);
  const currentReviews = useSelector((state) =>  state.reviews.allReviews)
  const reviewsArr = Object.values(currentReviews)

  useEffect(() => {
    dispatch(vehicleActions.currentVehiclesThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(reviewActions.currentReviewsThunk());
  }, [dispatch]);

  return (
    <>
    <h1>GT Cockpit</h1>
    <h2>Your Listings:</h2>
    <div className="cars-list">
        {vehiclesObj.map((vehicle) => (
            <div className="card" key={vehicle.id} value={vehicle.id}>
              <VehicleCardUser vehicle={vehicle} />
            </div>
        ))}
      </div>
    <h2>Your Reviews:</h2>
    <div className="reviews-section">
            {reviewsArr.map((review) => (
              <div className="reviewcard" key={review.id} value={review.id}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
    </>
  )
}

export default UserPage

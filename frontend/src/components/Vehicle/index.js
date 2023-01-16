import React from "react";
import * as vehicleActions from "../../store/vehicles";
import * as reviewActions from "../../store/reviews";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import ReviewCard from "../ReviewCard/index";
import EditVehicleFormModal from "../EditVehicleFormModal/index";
import CreateReviewFormModal from "../CreateReviewFormModal/index";
import MyMap from "../GoogleMap/MapComponent"
import "./vehicle.css";

function GetOneVehiclePage() {
  const dispatch = useDispatch();
  const { vehicleId } = useParams();

  useEffect(() => {
    dispatch(reviewActions.clearReviewsThunk());
  },[dispatch]);

  useEffect(() => {
    dispatch(vehicleActions.vehicleThunk(vehicleId));
  }, [dispatch, vehicleId]);

  useEffect(() => {
    dispatch(reviewActions.allReviewsThunk(vehicleId));
  }, [dispatch, vehicleId]);

  const sessionUser = useSelector((state) => state.session.user);
  const vehicle = useSelector((state) => state.vehicle.singleVehicle);

  const reviews = useSelector((state) => state.reviews.allReviews);
  const reviewsArr = Object.values(reviews);

  if (!vehicle.VehicleImages) {
    return null;
  }


  if (sessionUser === null || sessionUser === undefined) {
    return (
      <>
        <div className="one-spot-container">
          <div className="one-spot-info-section" key={vehicle.id}>
            <div className="cardimage-one">
              <img src={vehicle.VehicleImages[0]?.url} alt={""} />
            </div>
            <div className="one-spot-title">
              <h1>
                {vehicle.make} {vehicle.model} {vehicle.trim} {vehicle.year}{" "}
              </h1>{" "}
              <h3> ${vehicle.price}</h3>
            </div>
            <div className="one-spot-info">
              <p>
              {vehicle.avgStarRating} ★ • ({vehicle.numReviews} trips)
              </p>
              <p>
                <i className="fa-solid fa-gauge" />
                {vehicle.MPG} MPG •
                <i className="fa-solid fa-gas-pump" />
                {vehicle.drivetrain} premium •
                {vehicle.doors} Doors •
                {vehicle.numSeats} Seats
              </p>
            </div>
          </div>
          <div className="one-spot-images-section"></div>
          <div className="one-spot-description-section">
            <h4>Description</h4>
            <p>{vehicle.description}</p>
          </div>
          <div className="one-spot-review-title">
            <h2>
              Ratings and Reviews {vehicle.avgStarRating} ★ • (
              {vehicle.numReviews} ratings)
            </h2>
          </div>
          <div className="reviews-section">
            {reviewsArr.map((review) => (
              <div className="reviewcard" key={review.id} value={review.id}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
        
        <footer className="footer">
          <a
            href="https://www.linkedin.com/in/farhad-koushan-63b920167/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin" />
          </a>{" "}
          Developed By Farhad Koushan{" "}
          <a
            href="https://github.com/FarhadK2022"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github" />
          </a>
        </footer>
      </>
    );
  } else if (sessionUser.id === vehicle.ownerId) {
    return (
      <>
         <div className="one-spot-container">
          <div className="one-spot-info-section" key={vehicle.id}>
            <div className="cardimage-one">
              <img src={vehicle.VehicleImages[0]?.url} alt={""} />
            </div>
            <div className="one-spot-title">
              <h1>
                {vehicle.make} {vehicle.model} {vehicle.trim} {vehicle.year}{" "}
              </h1>{" "}
              <h3> ${vehicle.price}</h3>
            </div>
            <div className="one-spot-info">
              <p>
              {vehicle.avgStarRating} ★ • ({vehicle.numReviews} trips)
              </p>
              <p>
                <i className="fa-solid fa-gauge" />
                {vehicle.MPG} MPG •
                <i className="fa-solid fa-gas-pump" />
                {vehicle.drivetrain} premium •
                {vehicle.doors} Doors •
                {vehicle.numSeats} Seats
              </p>
            </div>
          </div>
          <div className="one-spot-images-section"></div>
          <div className="one-spot-description-section">
            <h4>Description</h4>
            <p>{vehicle.description}</p>
          </div>
          <div className="one-spot-review-title">
            <h2>
              Ratings and Reviews {vehicle.avgStarRating} ★ • (
              {vehicle.numReviews} trips)
            </h2>
          </div>
          <div className="reviews-section">
            {reviewsArr.map((review) => (
              <div className="reviewcard" key={review.id} value={review.id}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
          <div className="owners-tools">
            <EditVehicleFormModal vehicle={vehicle} />
            <Link to={`/home`}>
            <button
              className="button"
              onClick={async () => {
                // event.stopPropagation();
                await dispatch(vehicleActions.deleteVehicleThunk(vehicle.id));
              }}
            >
              Delete Vehicle
            </button>
            </Link>
          </div>
        </div>
        <footer className="footer">
          <a
            href="https://www.linkedin.com/in/farhad-koushan-63b920167/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin" />
          </a>{" "}
          Developed By Farhad Koushan{" "}
          <a
            href="https://github.com/FarhadK2022"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github" />
          </a>
        </footer>
      </>
    );
  } else if (sessionUser.id !== vehicle.ownerId) {
    return (
      <>
         <div className="one-spot-container">
          <div className="one-spot-info-section" key={vehicle.id}>
            <div className="cardimage-one">
              <img src={vehicle.VehicleImages[0]?.url} alt={""} />
            </div>
            <div className="one-spot-title">
              <h1>
                {vehicle.make} {vehicle.model} {vehicle.trim} {vehicle.year}{" "}
              </h1>{" "}
              <h3> ${vehicle.price}</h3>
            </div>
            <div className="one-spot-info">
              <p>
              {vehicle.avgStarRating} ★ • ({vehicle.numReviews} trips)
              </p>
              <p>
                <i className="fa-solid fa-gauge" />
                {vehicle.MPG} MPG •
                <i className="fa-solid fa-gas-pump" />
                {vehicle.drivetrain} premium •
                {vehicle.doors} Doors •
                {vehicle.numSeats} Seats
              </p>
            </div>
          </div>
          <div className="one-spot-images-section"></div>
          <div className="one-spot-description-section">
            <h4>Description</h4>
            <p>{vehicle.description}</p>
          </div>
          <div className="one-spot-review-title">
            <h2>
              Ratings and Reviews {vehicle.avgStarRating} ★ • (
              {vehicle.numReviews} ratings)
            </h2>
            <CreateReviewFormModal vehicle={vehicle} />
          </div>
          <div className="reviews-section">
            {reviewsArr.map((review) => (
              <div className="reviewcard" key={review.id} value={review.id}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
        <footer className="footer">
          <a
            href="https://www.linkedin.com/in/farhad-koushan-63b920167/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin" />
          </a>{" "}
          Developed By Farhad Koushan{" "}
          <a
            href="https://github.com/FarhadK2022"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github" />
          </a>
        </footer>
      </>
    );
  }
}

export default GetOneVehiclePage;

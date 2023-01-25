import React from "react";
import * as vehicleActions from "../../store/vehicles";
import * as reviewActions from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewCard from "../ReviewCard/index";
import EditVehicleFormModal from "../EditVehicleFormModal/index";
import CreateReviewFormModal from "../CreateReviewFormModal/index";
import "./vehicle.css";

function GetOneVehiclePage() {
  const dispatch = useDispatch();
  const { vehicleId } = useParams();
  useEffect(() => {
    dispatch(reviewActions.clearReviewsThunk());
  }, [dispatch]);

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
          <div className="cardimage-one">
            <img className="cardimage-one" src={vehicle.VehicleImages[0]?.url} alt={""} />
          </div>
          <div className="one-spot-info-section" key={vehicle.id}>
            <div className="one-spot-title">
              <h1>
                {vehicle.make} {vehicle.model} {vehicle.year}{" "}
              </h1>{" "}
              <h3> ${vehicle.price} / day </h3>
            </div>
            <h3>{vehicle.trim}</h3>
            <div className="one-spot-info">
              <li>
                {vehicle.avgStarRating} ★ • ({vehicle.numReviews} trips)
              </li>|
              <li>
                <i className="fa-solid fa-gauge" />{" "}
                {vehicle.MPG} MPG
              </li>|
              <li>
                <i className="fa-solid fa-gas-pump" />{" "}
                {vehicle.drivetrain} (Premium)
              </li>|
              <li>
              <i className="fa-solid fa-door-closed"/>{" "}
              {vehicle.doors} Doors
              </li>|
              <li>
              <i className="fa-solid fa-chair"/>{" "}
                {vehicle.numSeats} Seats
              </li>
            </div>
          </div>
          {/* <div className="one-spot-images-section"></div> */}
          <div className="one-spot-description-section">
            <h2>Description</h2>
            <p>{vehicle.description}</p>
          </div>
          <div className="one-spot-review-title">
            <h2>Ratings and Reviews</h2>
            <h3>
              {vehicle.avgStarRating} ★ • (
              {vehicle.numReviews} ratings)
            </h3>
          </div>
          <div className="reviews-section">
            {reviewsArr.map((review) => (
              <div className="reviewcard" key={review.id} value={review.id}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
          <h2>Pick Up Location</h2>
          <iframe
            title="Pick Up Location"
            width="1400"
            height="750"
            style={{ border: 0, paddingBottom: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/search?q=near+${vehicle.latitude},+${vehicle.longitude}&center=${vehicle.latitude},+${vehicle.longitude}&zoom=12&key=AIzaSyCRSvlDSkCRnK_ceW4Vscl0-6QKmIRXSZY`}
          ></iframe>
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
          <div className="cardimage-one">
            <img src={vehicle.VehicleImages[0]?.url} alt={""} />
          </div>
          <div className="one-spot-info-section" key={vehicle.id}>
            <div className="one-spot-title">
              <h1>
                {vehicle.make} {vehicle.model} {vehicle.year}{" "}
              </h1>{" "}
              <h3> ${vehicle.price} / day </h3>
            </div>
            <h3>{vehicle.trim}</h3>
            <div className="one-spot-info">
            <li>
                {vehicle.avgStarRating} ★ • ({vehicle.numReviews} trips)
              </li>|
              <li>
                <i className="fa-solid fa-gauge" />{" "}
                {vehicle.MPG} MPG
              </li>|
              <li>
                <i className="fa-solid fa-gas-pump" />{" "}
                {vehicle.drivetrain} (Premium)
              </li>|
              <li>
              <i className="fa-solid fa-door-closed"/>{" "}
              {vehicle.doors} Doors
              </li>|
              <li>
              <i className="fa-solid fa-chair"/>{" "}
                {vehicle.numSeats} Seats
              </li>
            </div>
          </div>
          {/* <div className="one-spot-images-section"></div> */}
          <div className="one-spot-description-section">
            <h2>Description</h2>
            <p>{vehicle.description}</p>
          </div>
          <div className="one-spot-review-title">
            <h2>Ratings and Reviews</h2>
            <h3>
              {vehicle.avgStarRating} ★ • (
              {vehicle.numReviews} ratings)
            </h3>
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
          <h2>Pick Up Location</h2>
          <iframe
            title="Pick up Location"
            width="1400"
            height="750"
            style={{ border: 0, paddingBottom: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/search?q=near+${vehicle.latitude},+${vehicle.longitude}&center=${vehicle.latitude},+${vehicle.longitude}&zoom=12&key=AIzaSyCRSvlDSkCRnK_ceW4Vscl0-6QKmIRXSZY`}
          ></iframe>
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
          <div className="cardimage-one">
            <img src={vehicle.VehicleImages[0]?.url} alt={""} />
          </div>
          <div className="one-spot-info-section" key={vehicle.id}>
            <div className="one-spot-title">
              <h1>
                {vehicle.make} {vehicle.model} {vehicle.year}{" "}
              </h1>{" "}
              <h3> ${vehicle.price} / day </h3>
            </div>
            <h3>{vehicle.trim}</h3>
            <div className="one-spot-info">
            <li>
                {vehicle.avgStarRating} ★ • ({vehicle.numReviews} trips)
              </li>|
              <li>
                <i className="fa-solid fa-gauge" />{" "}
                {vehicle.MPG} MPG
              </li>|
              <li>
                <i className="fa-solid fa-gas-pump" />{" "}
                {vehicle.drivetrain} (Premium)
              </li>|
              <li>
              <i className="fa-solid fa-door-closed"/>{" "}
              {vehicle.doors} Doors
              </li>|
              <li>
              <i className="fa-solid fa-chair"/>{" "}
                {vehicle.numSeats} Seats
              </li>
            </div>
          </div>
          {/* <div className="one-spot-images-section"></div> */}

          <div className="one-spot-description-section">
            <h2>Description</h2>
            <p>{vehicle.description}</p>
          </div>
          <div className="one-spot-review-title">
            <h2>Ratings and Reviews</h2>
            <h3>
              {vehicle.avgStarRating} ★ • (
              {vehicle.numReviews} ratings)
            </h3>

          </div>
          <div className="reviews-section">
            {reviewsArr.map((review) => (
              <div className="reviewcard" key={review.id} value={review.id}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
          <div className="owners-tools">
          <CreateReviewFormModal vehicle={vehicle} />
          </div>
          <h2>Pick Up Location</h2>
          <iframe
            title="Pick up location"
            width="1400"
            height="750"
            style={{ border: 0, paddingBottom: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/search?q=near+${vehicle.latitude},+${vehicle.longitude}&center=${vehicle.latitude},+${vehicle.longitude}&zoom=12&key=AIzaSyCRSvlDSkCRnK_ceW4Vscl0-6QKmIRXSZY`}
          ></iframe>
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

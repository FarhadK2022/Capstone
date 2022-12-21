import React from "react";
import * as vehicleActions from "../../store/vehicles";
import * as reviewActions from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewCard from "../ReviewCard/index";
import EditVehicleFormModal from "../EditVehicleFormModal/index";
import CreateReviewFormModal from "../CreateReviewFormModal/index";
import "./spot.css";

function GetOneVehiclePage() {
  const dispatch = useDispatch();
  const { vehicleId } = useParams();

  useEffect(() => {
    dispatch(vehicleActions.vehicleThunk(vehicleId));
  }, [dispatch, vehicleId]);

  useEffect(() => {
    dispatch(reviewActions.allReviewsThunk(vehicleId));
  }, [dispatch, vehicleId]);

  const sessionUser = useSelector((state) => state.session.user);
  const vehicle = useSelector((state) => state.vehicles.singleVehicle);

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
            <div className="one-spot-title">
              <h1>{vehicle.model}</h1>
            </div>
            <div className="one-spot-info">
              <p>
                ★ {vehicle.avgStarRating} • {vehicle.numReviews} trips • {vehicle.city}
                , {vehicle.state} • ${vehicle.price}
              </p>
            </div>
          </div>
          <div className="one-spot-images-section">
            <div className="cardimage-one">
              <img src={vehicle.VehicleImages[0]?.url} alt={""} />
            </div>
            <div className="cardimage-quad">
              <i class="fa-solid fa-image fa-9x"></i>
              <i class="fa-solid fa-image fa-9x"></i>
              <i class="fa-solid fa-image fa-9x"></i>
              <i class="fa-solid fa-image fa-9x"></i>
            </div>
          </div>
          <div className="one-spot-description-section">
            <p>{vehicle.description}</p>
          </div>
          <div className="one-spot-review-title">
            <h2>
              ★ {vehicle.avgStarRating} • {vehicle.numReviews} trips
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
          <p>Developed By Farhad Koushan</p>
        </footer>
      </>
    );
  } else if (sessionUser.id === vehicle.ownerId) {
    return (
      <>
        <div className="one-spot-container">
          <div className="one-spot-info-section" key={vehicle.id}>
            <div className="one-spot-title">
              <h1>{vehicle.model}</h1>
            </div>
            <div className="one-spot-info">
              <p>
                ★ {vehicle.avgStarRating} • {vehicle.numReviews} trips • {vehicle.city}
                , {vehicle.state} • ${vehicle.price}
              </p>
            </div>
          </div>
          <div className="one-spot-images-section">
            <div className="cardimage-one">
              <img src={vehicle.SpotImages[0]?.url} alt={""} />
            </div>
            <div className="cardimage-quad">
              <i class="fa-solid fa-image fa-9x"></i>
              <i class="fa-solid fa-image fa-9x"></i>
              <i class="fa-solid fa-image fa-9x"></i>
              <i class="fa-solid fa-image fa-9x"></i>
            </div>
          </div>
          <div className="one-spot-description-section">
            <p>{vehicle.description}</p>
          </div>
          <div className="one-spot-review-title">
            <h2>
              ★ {vehicle.avgStarRating} • {vehicle.numReviews} trips
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
            <EditVehicleFormModal vehicle ={vehicle} />
            <Link to={`/`}>
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
          <p>Developed By Farhad Koushan</p>
        </footer>
      </>
    );
  } else if (sessionUser.id !== vehicle.ownerId) {
    return (
      <>
        <div className="one-spot-container">
          <div className="one-spot-info-section" key={vehicle.id}>
            <div className="one-spot-title">
              <h1>{vehicle.model}</h1>
            </div>
            <div className="one-spot-info">
              <p>
                ★ {vehicle.avgStarRating} • {vehicle.numReviews} trips • {vehicle.city}
                , {vehicle.state} • ${vehicle.price}
              </p>
            </div>
          </div>
          <div className="one-spot-images-section">
            <div className="cardimage-one">
              <img src={vehicle.VehicleImages[0]?.url} alt={""} />
            </div>
            <div className="cardimage-quad">
              <i class="fa-solid fa-image fa-9x"></i>
              <i class="fa-solid fa-image fa-9x"></i>
              <i class="fa-solid fa-image fa-9x"></i>
              <i class="fa-solid fa-image fa-9x"></i>
            </div>
          </div>
          <div className="one-spot-description-section">
            <p>{vehicle.description}</p>
          </div>
          <div className="one-spot-review-title">
            <h2>
              ★ {vehicle.avgStarRating} • {vehicle.numReviews} trips
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
          <p>Developed By Farhad Koushan</p>
        </footer>
      </>
    );
  }
}

export default GetOneVehiclePage;

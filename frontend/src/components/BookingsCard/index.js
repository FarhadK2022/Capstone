import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as bookingActions from "../../store/bookings";
import EditBookingFormModal from "../EditBookingFormModal/index";
import "./BookingCard.css";

function BookingCard({ booking }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser.id === booking.userId) {
    return (
      <div className="card-container">
        <div className="card">
          <Link className="card" to={`/cars/${booking.vehicleId}`}>
            <img src={booking.Vehicle?.previewImage} alt={""} />
          </Link>
          <div className="card-info">
            <h3>Start:{" "} {booking.startDate}</h3>
            <h3>End:{" "} {booking.endDate}</h3>
          </div>
          <div className="card-price">
            <EditBookingFormModal booking={booking} />
            <button
              className="button"
              onClick={async () => {
                // event.stopPropagation();
                await dispatch(bookingActions.deleteBookingThunk(booking.id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingCard;

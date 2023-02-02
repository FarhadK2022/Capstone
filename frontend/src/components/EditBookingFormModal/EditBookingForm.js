import React, { useState, useEffect } from "react";
import * as bookingActions from "../../store/bookings";
import { useDispatch, useSelector } from "react-redux";
import "./EditBookingFormModal.css";

function EditBookingForm({ booking, setShowModal }) {
  // console.log(booking)
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  // const currentCar = useSelector((state) => state.vehicle.singleVehicle);
  const [estartDate, setStartDate] = useState(booking.booking.startDate);
  const [eendDate, setEndDate] = useState(booking.booking.endDate);
  const [errors, setErrors] = useState([]);
  let bookingId = booking.booking.id;

  useEffect(() => {
    dispatch(bookingActions.currentBookingsThunk());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editBookings = {
      estartDate,
      eendDate,
    };

    const edittedBooking = await dispatch(
      bookingActions.editBookingThunk(editBookings, bookingId, currentUser)
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
      // console.log(data);
    });
    if (edittedBooking) {
      setShowModal(false);
      await dispatch(bookingActions.currentBookingsThunk());
    }
  };

  return (
    <form className="formModal" onSubmit={handleSubmit}>
      <h1>Edit Booking</h1>
      <ul>
        {/* <li color="red">{errors}</li> */}
        {/* <li color="red">{errors.endDate}</li> */}
      </ul>
      <label>
        Trip Start
        <input
          type="date"
          className="inputField"
          value={estartDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </label>
      <label>
        Trip End
        <input
          type="date"
          className="inputField"
          value={eendDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </label>

      <button className="button" type="submit">
        Submit Booking
      </button>
    </form>
  );
}

export default EditBookingForm;

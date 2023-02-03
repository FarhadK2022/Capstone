import React, { useState, useEffect } from "react";
import * as bookingActions from "../../store/bookings";
import { useDispatch, useSelector } from "react-redux";
import "./CreateBookingFormModal.css";

function CreateBookingForm({ vehicle, setShowModal }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState([]);
  let vehicleId = vehicle.vehicle.id;

  useEffect(() => {
    dispatch(bookingActions.allBookingsThunk(vehicleId));
  }, [dispatch, vehicleId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBooking = {
      startDate,
      endDate,
    };

    const createdBooking = await dispatch(
      bookingActions.createBookingThunk(newBooking, vehicleId, currentUser)
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.message) setErrors(data.message);
    
    });
    if (createdBooking) {
      setShowModal(false);
      await dispatch(bookingActions.allBookingsThunk(vehicleId));
    }
  };

  return (
    <form className="formModal" onSubmit={handleSubmit}>
      <h1>Create Booking</h1>
      <ul>
        <li color="red">{errors}</li>
      </ul>
      <label>
        Trip Start
        <input
          type="date"
          className="inputField"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </label>
      <label>
        Trip End
        <input
          type="date"
          className="inputField"
          value={endDate}
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

export default CreateBookingForm;

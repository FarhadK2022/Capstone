import { csrfFetch } from "./csrf";

const GET_BOOKINGS = "bookings/getAllBookings";
const CREATE_BOOKING = "bookings/createBooking";
const DELETE_BOOKING = "bookings/deleteBooking";
const CLEAR_BOOKING = "bookings/clearBookings";
const EDIT_BOOKING = "bookings/editBooking";
const GET_CURRENT_BOOKINGS = "bookings/getCurrentBookings"

const getAllBookings = (revs) => {
  return {
    type: GET_BOOKINGS,
    revs,
  };
};

const getCurrentBookings = (revs) => {
  return {
    type: GET_CURRENT_BOOKINGS,
    revs,
  };
};

const createBooking = (rev) => {
  return {
    type: CREATE_BOOKING,
    rev,
  };
};

const deleteBooking = (bookingId) => {
  return {
    type: DELETE_BOOKING,
    bookingId
  };
};

const clearBookings = () => {
  return{
    type: CLEAR_BOOKING,
  }
}

const editBooking = (rev) => {
  return {
    type: EDIT_BOOKING,
    rev
  }
}
export const clearBookingsThunk = () => async (dispatch) => {
  dispatch(clearBookings())
}

export const allBookingsThunk = (vehicleId) => async (dispatch) => {
  const response = await csrfFetch(`/api/vehicles/${vehicleId}/bookings`, {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getAllBookings(data.Bookings));
    return response;
  }
};

export const currentBookingsThunk = () => async (dispatch) => {
  const response = await csrfFetch('/api/bookings/current', {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getCurrentBookings(data.Bookings));
    return response;
  }
};

export const createBookingThunk = (newBooking, vehicleId, user) => async (dispatch) => {
  const { startDate, endDate } = newBooking;
  const response = await csrfFetch(`/api/vehicles/${vehicleId}/bookings`, {
    method: "POST",
    body: JSON.stringify({
      startDate,
      endDate,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    data.User = user
    dispatch(createBooking(data));
    return response;
  }
};

export const editBookingThunk = (editReview, bookingId, user ) => async (dispatch) => {
  const { estartDate, eendDate } = editReview;
  const response = await csrfFetch(`/api/bookings/${bookingId}`,{
    method: "PUT",
    body: JSON.stringify({
      estartDate,
      eendDate,
    }),
  })
  if (response.ok) {
    const data = await response.json();
    data.User = user
    dispatch(editBooking(data));
    return response;
  }
}

export const deleteBookingThunk = (bookingId) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${bookingId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteBooking(bookingId));
    return response;
  }
};

const initialState = {allBookings:{}};

const bookingReducer = (state = initialState, action) => {
  // let newState = {};
  switch (action.type) {
    case CLEAR_BOOKING: {
      const newState = {allBookings:{}};
      return newState;
    }
    case GET_BOOKINGS:{
      const newState = {allBookings:{}};
      action.revs.forEach((rev) => (newState.allBookings[rev.id] = rev));
      return newState;
    }
    case GET_CURRENT_BOOKINGS:{
      const newState = {allBookings:{}};
      action.revs.forEach((rev) => (newState.allBookings[rev.id] = rev));
      return newState;
    }
    case CREATE_BOOKING:{
      const newState = {...state, allBookings:{...state.allBookings}}
      newState.allBookings[action.rev.id] = action.rev;
      return newState;
    }
    case EDIT_BOOKING:{
      const newState = {...state, allBookings:{...state.allBookings}}
      newState.allBookings[action.rev.id] = action.rev;
      // newState.allReviews = {...newState.allReviews, ...action.rev};
      return newState;
    }
    case DELETE_BOOKING:{
      const newState = {...state, allBookings:{...state.allBookings}}
      delete newState.allReviews[action.bookingId];
      return newState;
    }
    default:
      return state;
  }
};

export default bookingReducer;

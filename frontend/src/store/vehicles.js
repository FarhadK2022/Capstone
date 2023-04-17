import { csrfFetch } from "./csrf";

const GET_VEHICLES = "vehicles/getAllVehicles";
const GET_VEHICLE = "vehicles/getVehicle";
const CREATE_VEHICLE = "vehicles/createVehicle";
const EDIT_VEHICLE = "vehicles/editVehicle";
const DELETE_VEHICLE = "vehicles/deleteVehicle";
const GET_CURRENT_VEHICLES = "vehicles/getCurrentVehicles"
const SEARCH_VEHICLES = "vehicles/getSearchVehicles"

const getAllVehicles = (data) => {
  return {
    type: GET_VEHICLES,
    data,
  };
};
const getCurrentVehicles = (data) => {
  return {
    type: GET_VEHICLES,
    data,
  };
};
const getSearchVehicles = (data) => {
  return {
    type: GET_VEHICLES,
    data,
  };
};

const getVehicle = (vehicle) => {
  return {
    type: GET_VEHICLE,
    vehicle,
  };
};

const createVehicle = (vehicle) => {
  return {
    type: CREATE_VEHICLE,
    vehicle,
  };
};

const editVehicle = (vehicle) => {
  return {
    type: EDIT_VEHICLE,
    vehicle,
  };
};

const deleteVehicle = (vehicleId) => {
  return {
    type: DELETE_VEHICLE,
    vehicleId
  };
};

export const allVehiclesThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/vehicles", {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getAllVehicles(data));
  }
  return response;
};

export const allVehiclesSearchThunk = (searchInput) => async (dispatch) => {
  const {type, category, make, doors, drivetrain, transmission, numSeats, petFriendly, price} = searchInput
  const response = await csrfFetch(`/api/vehicles/make/${make}/doors/${doors}`, {
    method: "GET",

  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getSearchVehicles(data));
  }
  return response;
};

export const currentVehiclesThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/vehicles/current", {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getCurrentVehicles(data));
  }
  return response;
};

export const vehicleThunk = (vehicleId) => async (dispatch) => {
  const response = await csrfFetch(`/api/vehicles/${vehicleId}`, {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getVehicle(data));
  }
  return response;
};

export const createVehicleThunk = (vehicle) => async (dispatch) => {
  const {
    address,
    city,
    state,
    latitude,
    longitude,
    type,
    category,
    make,
    model,
    year,
    trim,
    doors,
    drivetrain,
    MPG,
    transmission,
    numSeats,
    petFriendly,
    description,
    price,
    url,
    preview,
  } = vehicle;
  const response = await csrfFetch("/api/vehicles", {
    method: "POST",
    body: JSON.stringify({
      address,
    city,
    state,
    latitude,
    longitude,
    type,
    category,
    make,
    model,
    year,
    trim,
    doors,
    drivetrain,
    MPG,
    transmission,
    numSeats,
    petFriendly,
    description,
    price,
    }),
  });
  if (response.ok) {
    const newVehicle = await response.json();
    const response2 = await csrfFetch(`/api/vehicles/${newVehicle.id}/images`, {
      method: "POST",
      body: JSON.stringify({
        url,
        preview,
      }),
    });
    if (response2.ok) {
      const newImage = await response2.json();
      newVehicle.previewImage = newImage.url;
      dispatch(createVehicle(newVehicle));
    }
    return newVehicle;
  }
};

export const editVehicleThunk = (vehicleId, vehicle) => async (dispatch) => {
  const {
    address,
    city,
    state,
    latitude,
    longitude,
    type,
    category,
    make,
    model,
    year,
    trim,
    doors,
    drivetrain,
    MPG,
    transmission,
    numSeats,
    petFriendly,
    description,
    price,
  } = vehicle;
  const response = await csrfFetch(`/api/vehicles/${vehicleId}`, {
    method: "PUT",
    body: JSON.stringify({
      address,
      city,
      state,
      latitude,
      longitude,
      type,
      category,
      make,
      model,
      year,
      trim,
      doors,
      drivetrain,
      MPG,
      transmission,
      numSeats,
      petFriendly,
      description,
      price,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(editVehicle(data));
    return data;
  }
};

export const deleteVehicleThunk = (vehicleId) => async (dispatch) => {
  const response = await csrfFetch(`/api/vehicles/${vehicleId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteVehicle(vehicleId));
  }
  return response;
};

const initialState = {allVehicles:{}, singleVehicle:{}};

const vehicleReducer = (state = initialState, action) => {
  // let newState = {};
  switch (action.type) {
    case GET_VEHICLES: {
      const newState = {allVehicles:{}, singleVehicle:{}};
      action.data.Vehicles.forEach((vehicle) => (newState.allVehicles[vehicle.id] = vehicle));
      return newState;
    }
     case GET_VEHICLES: {
      const newState = {allVehicles:{}, singleVehicle:{}};
      action.data.Vehicles.forEach((vehicle) => (newState.allVehicles[vehicle.id] = vehicle));
      return newState;
    }
     case SEARCH_VEHICLES: {
      const newState = {allVehicles:{}, singleVehicle:{}};
      action.data.Vehicles.forEach((vehicle) => (newState.allVehicles[vehicle.id] = vehicle));
      return newState;
    }
    case GET_CURRENT_VEHICLES: {
      const newState = {allVehicles:{}, singleVehicle:{}};
      action.data.Vehicles.forEach((vehicle) => (newState.allVehicles[vehicle.id] = vehicle));
      return newState;
    }
    case GET_VEHICLE: {
      const newState = {allVehicles:{}, singleVehicle:{}}
      newState.singleVehicle = action.vehicle;
      return newState;
    }
    case CREATE_VEHICLE: {
        const newState = {...state, allVehicles:{...state.allVehicles}, singleVehicle:{}}
        newState.allVehicles[action.vehicle.id] = action.vehicle;
        return newState;
      }
    case EDIT_VEHICLE:{
      const newState = {...state, allVehicles:{}, singleVehicle:{...state.singleVehicle}}
      newState.singleVehicle = {...newState.singleVehicle, ...action.vehicle};
      return newState;
    }
    case DELETE_VEHICLE:{
      const newState = {...state, allVehicles:{...state.allVehicles}, singleVehicle:{}}
      delete newState.allVehicles[action.vehicleId];
      return newState;
    }
    default:
      return state;
  }
};

export default vehicleReducer;

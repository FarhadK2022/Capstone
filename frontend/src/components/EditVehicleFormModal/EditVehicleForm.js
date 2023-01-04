import React, { useState } from "react";
import * as vehicleActions from "../../store/vehicles";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./EditVehicleFormModal.css";

function EditVehicleForm({ vehicle, setShowModal }) {
  const dispatch = useDispatch();
  const params = useParams();
  const { vehicleId } = params;
  const [address, setAddress] = useState(vehicle.address);
  const [city, setCity] = useState(vehicle.city);
  const [state, setState] = useState(vehicle.state);
  const [latitude] = useState(vehicle.latitude);
  const [longitude] = useState(vehicle.longitude);
  const [type, setType] = useState(vehicle.type);
  const [category, setCategory] = useState(vehicle.category);
  const [make, setMake] = useState(vehicle.make);
  const [model, setModel] = useState(vehicle.model);
  const [year, setYear] = useState(vehicle.year);
  const [trim, setTrim] = useState(vehicle.trim);
  const [doors, setDoors] = useState(vehicle.doors);
  const [drivetrain, setDrivetrain] = useState(vehicle.drivetrain);
  const [MPG, setMPG] = useState(vehicle.MPG);
  const [transmission, setTransmission] = useState(vehicle.transmission);
  const [numSeats, setNumSeats] = useState(vehicle.numSeats);
  const [petFriendly, setPetFriendly] = useState(vehicle.petFriendly);
  const [description, setDescription] = useState(vehicle.description);
  const [price, setPrice] = useState(vehicle.price);
  // const [setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErrors([]);
    const vehicle = {
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
    };
    const edittedVehicle = await dispatch(
      vehicleActions.editVehicleThunk(vehicleId, vehicle)
    );
    if (edittedVehicle) setShowModal(false);
  };

  return (
    <form className="formModal" onSubmit={handleSubmit}>
      <h1>Edit Vehicle</h1>
      <label>
        Address
        <input
          className="inputField"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label>
        City
        <input
          className="inputField"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label>
        State
        <input
          className="inputField"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <label>
        Vehicle Type
        <select
          className="inputField"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option disabled></option>
          <option value={"Car"}>Car</option>
          <option value={"Truck"}>Truck</option>
          <option value={"Suv"}>SUV</option>
        </select>
      </label>
      <label>
        Category
        <select
          className="inputField"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option disabled></option>
          <option value={"Convertible"}>Convertible</option>
          <option value={"Coupe"}>Coupe</option>
          <option value={"Electric"}>Electric</option>
          <option value={"Executive"}>Executive</option>
          <option value={"Exotic"}>Exotic</option>
          <option value={"Hybrid"}>Hybrid</option>
          <option value={"Offroad"}>Offroad</option>
          <option value={"Sedan"}>Sedan</option>
        </select>
      </label>
      <label>
        Make
        <select
          className="inputField"
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required
        >
          <option disabled></option>
          <option value={"Acura"}>Acura</option>
          <option value={"Alfa Romeo"}>Alfa Romeo</option>
          <option value={"Aston Martin"}>Aston Martin</option>
          <option value={"Audi"}>Audi</option>
          <option value={"Bentley"}>Bentley</option>
          <option value={"BMW"}>BMW</option>
          <option value={"Bugatti"}>Bugatti</option>
          <option value={"Cadillac"}>Cadillac</option>
          <option value={"Chevrolet"}>Chevrolet</option>
          <option value={"Dodge"}>Dodge</option>
          <option value={"Ferrari"}>Ferrari</option>
          <option value={"Ford"}>Ford</option>
          <option value={"Genesis"}>Genesis</option>
          <option value={"Honda"}>Honda</option>
          <option value={"Infinity"}>Infinity</option>
          <option value={"Jaguar"}>Jaguar</option>
          <option value={"Jeep"}>Jeep</option>
          <option value={"Koenigsegg"}>Koenigsegg</option>
          <option value={"Lamborghini"}>Lamborghini</option>
          <option value={"Land Rover"}>Land Rover</option>
          <option value={"Lexus"}>Lexus</option>
          <option value={"Lotus"}>Lotus</option>
          <option value={"Lucid"}>Lucid</option>
          <option value={"Maserati"}>Maserati</option>
          <option value={"Mazda"}>Mazda</option>
          <option value={"McLaren"}>McLaren</option>
          <option value={"Mercedes-Benz"}>Mercedes-Benz</option>
          <option value={"Mitsubishi"}>Mitsubishi</option>
          <option value={"Maybach"}>Maybach</option>
          <option value={"Nissan"}>Nissan</option>
          <option value={"Pagani"}>Pagani</option>
          <option value={"Porsche"}>Porsche</option>
          <option value={"Rivian"}>Rivian</option>
          <option value={"Rolls Royce"}>Rolls Royce</option>
          <option value={"Saleen"}>Saleen</option>
          <option value={"Subaru"}>Subaru</option>
          <option value={"Tesla"}>Tesla</option>
          <option value={"Toyota"}>Toyota</option>
          <option value={"Volkswagen"}>Volkswagen</option>
        </select>
      </label>
      <label>
        Model
        <input
          className="inputField"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </label>
      <label>
        Year
        <input
          className="inputField"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </label>
      <label>
        Trim
        <input
          className="inputField"
          type="text"
          value={trim}
          onChange={(e) => setTrim(e.target.value)}
          required
        />
      </label>
      <label>
        Number of Doors
        <input
          className="inputField"
          type="number"
          value={doors}
          onChange={(e) => setDoors(e.target.value)}
          required
        />
      </label>
      <label>
        Drivetrain
        <select
          className="inputField"
          type="text"
          value={drivetrain}
          onChange={(e) => setDrivetrain(e.target.value)}
          required
        >
          <option disabled></option>
          <option value={"Diesel"}>Diesel</option>
          <option value={"Electric"}>Electric</option>
          <option value={"Gas"}>Gas</option>
          <option value={"Hybrid"}>Hybrid</option>
        </select>
      </label>
      <label>
        MPG
        <input
          className="inputField"
          type="number"
          value={MPG}
          onChange={(e) => setMPG(e.target.value)}
          required
        />
      </label>
      <label>
        Transmission
        <select
          className="inputField"
          type="text"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
          required
        >
          <option disabled></option>
          <option value={"Automatic"}>Automatic</option>
          <option value={"Manual"}>Manual</option>
        </select>
      </label>
      <label>
        Number of Seats
        <input
          className="inputField"
          type="number"
          value={numSeats}
          onChange={(e) => setNumSeats(e.target.value)}
          required
        />
      </label>
      <label>
        Pet Friendly?
        <select
          className="inputField"
          type="text"
          value={petFriendly}
          onChange={(e) => setPetFriendly(e.target.value)}
          required
        >
          <option disabled></option>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>
      </label>
      <label>
        Description
        <input
          className="inputField"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Price
        <input
          className="inputField"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <button className="button" type="submit">
        Edit Vehicle
      </button>
    </form>
  );
}

export default EditVehicleForm;

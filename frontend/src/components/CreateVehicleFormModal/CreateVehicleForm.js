import React, { useState } from "react";
import * as vehicleActions from "../../store/vehicles";
import { useDispatch } from "react-redux";
import "./CreateVehicleFormModal.css";

function CreateVehicleForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [latitude, setLatitude] = useState(45);
  const [longitude, setLongitude] = useState(45);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [trim, setTrim] = useState("");
  const [doors, setDoors] = useState("");
  const [drivetrain, setDrivetrain] = useState("");
  const [MPG, setMPG] = useState("");
  const [transmission, setTransmission] = useState("");
  const [numSeats, setNumSeats] = useState("");
  const [petFriendly, setPetFriendly] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [url, setURL] = useState("");
  const [preview, setPreview] = useState(true);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
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
      url,
      preview
    };
    const createdVehicle = await dispatch(vehicleActions.createVehicleThunk(vehicle))
      .then(() => setShowModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    if (createdVehicle) {
      setShowModal(false);
    } else {
      return setErrors([
        "Oops! Looks like a mistake was made on the form. Please check your details and submit again.",
      ]);
    }
  };

  return (
    <form className="formModal" onSubmit={handleSubmit}>
      <h1>Begin Your Hosting Journey!</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
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
        Type
        <input
          className="inputField"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </label>
      <label>
        Category
        <input
          className="inputField"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>
      <label>
        Make
        <input
          className="inputField"
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required
        />
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
          type="text"
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
          type="text"
          value={doors}
          onChange={(e) => setDoors(e.target.value)}
          required
        />
      </label>
      <label>
        Drivetrain
        <input
          className="inputField"
          type="text"
          value={drivetrain}
          onChange={(e) => setDrivetrain(e.target.value)}
          required
        />
      </label>
      <label>
        MPG
        <input
          className="inputField"
          type="text"
          value={MPG}
          onChange={(e) => setMPG(e.target.value)}
          required
        />
      </label>
      <label>
        Transmission
        <input
          className="inputField"
          type="text"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
          required
        />
      </label>
      <label>
        Number of Seats
        <input
          className="inputField"
          type="text"
          value={numSeats}
          onChange={(e) => setNumSeats(e.target.value)}
          required
        />
      </label>
      <label>
        Pet Friendly?
        <input
          className="inputField"
          type="text"
          value={petFriendly}
          onChange={(e) => setPetFriendly(e.target.value)}
          required
        />
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
      <label>
        Image Url
        <input
          className="inputField"
          type="url"
          placeholder="Image Url"
          value={url}
          onChange={(e) => setURL(e.target.value)}
          required
        />
      </label>
      <button className="button" type="submit">
       New Vehicle
      </button>
    </form>
  );
}

export default CreateVehicleForm;

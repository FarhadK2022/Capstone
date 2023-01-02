import React, { useState } from "react";
import * as vehicleActions from "../../store/vehicles";
import { useDispatch } from "react-redux";
import "./CreateVehicleFormModal.css";

function CreateVehicleForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [latitude] = useState(45);
  const [longitude] = useState(45);
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
  const [preview] = useState(true);
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
      preview,
    };
    const createdVehicle = await dispatch(
      vehicleActions.createVehicleThunk(vehicle)
    )
      .then(() => setShowModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    if (createdVehicle) {
      setShowModal(false);
    } else {
      return setErrors(["Please check the form details and submit again."]);
    }
  };

  return (
    <form className="formModal" onSubmit={handleSubmit}>
      <h1>Vehicle Details</h1>
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
          placeholder="Street Address"
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
          placeholder="City"
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
          placeholder="State"
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
          placeholder="Model Name"
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
          placeholder="Model Year"
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
          placeholder="Trim Level"
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
          placeholder="2, 3, 4, 5? More? Less?"
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
          type="text"
          value={MPG}
          onChange={(e) => setMPG(e.target.value)}
          placeholder="Miles Per Gallon"
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
          type="text"
          value={numSeats}
          placeholder="How Many Humans can Safely sit in your Vehicle?"
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
          placeholder="Tell us about your sweet ride!"
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
          placeholder="Price per Day"
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

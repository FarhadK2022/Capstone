import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as vehicleActions from "../../store/vehicles";
import "./Filters.css";

const SearchFilters = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [make, setMake] = useState("");
  const [doors, setDoors] = useState("");
  const [drivetrain, setDrivetrain] = useState("");
  const [transmission, setTransmission] = useState("");
  const [numSeats, setNumSeats] = useState("");
  const [petFriendly, setPetFriendly] = useState("");
  const [price, setPrice] = useState("");
  // const [errors, setErrors] = useState([]);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchInput = {
      type,
      category,
      make,
      doors,
      drivetrain,
      transmission,
      numSeats,
      petFriendly,
      price,
    };

    const searchResults = await dispatch(
      vehicleActions.allVehiclesSearchThunk(searchInput),
      // console.log(searchInput)
    );

    if (searchResults) {
      setShowModal(false);
      return history.push(`/cars/search`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formModal">
        <label>
          Vehicle Type
          <select
            className="inputField"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
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
          Number of Doors
          <select
            className="inputField"
            type="number"
            value={doors}
            onChange={(e) => setDoors(e.target.value)}
            placeholder="How many doors are needed?"
          >
            <option disabled></option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <label>
          Drivetrain
          <select
            className="inputField"
            type="text"
            value={drivetrain}
            onChange={(e) => setDrivetrain(e.target.value)}
          >
            <option disabled></option>
            <option value={"Diesel"}>Diesel</option>
            <option value={"Electric"}>Electric</option>
            <option value={"Gas"}>Gas</option>
            <option value={"Hybrid"}>Hybrid</option>
          </select>
        </label>
        <label>
          Transmission
          <select
            className="inputField"
            type="text"
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          >
            <option disabled></option>
            <option value={"Automatic"}>Automatic</option>
            <option value={"Manual"}>Manual</option>
          </select>
        </label>
        <label>
          Number of Seats
          <select
            className="inputField"
            type="number"
            value={numSeats}
            onChange={(e) => setNumSeats(e.target.value)}
            placeholder="How many seats are needed?"
          >
            <option disabled></option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6 or more</option>
          </select>
        </label>
        <label>
          Pet Friendly?
          <select
            className="inputField"
            type="text"
            value={petFriendly}
            onChange={(e) => setPetFriendly(e.target.value)}
          >
            <option disabled></option>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </label>
        <label>
          Price
          <select
            className="inputField"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Max Daily Price"
          >
            <option disabled></option>
            <option value={100}>100 or less</option>
            <option value={200}>200 or less</option>

            <option value={300}>300 or less</option>
            <option value={300}>Above 300</option>
          </select>
        </label>
        <button type="submit" className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchFilters;

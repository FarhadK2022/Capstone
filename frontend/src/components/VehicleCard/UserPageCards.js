import "./VehicleCardAll.css";
import "../Vehicles/vehicles.css"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as vehicleActions from "../../store/vehicles"
import EditVehicleFormModal from "../EditVehicleFormModal";

function VehicleCardUser({ vehicle, setShowModal }) {
  const dispatch = useDispatch()
  return (
    <>
      <div className="card-container">
        <div className="card">
          <Link className="card" to={`/cars/${vehicle.id}`}>
          <img src={vehicle.previewImage} alt={""} />
          </Link>
          <div className="card-info">
            <h2>
              {vehicle.make} {vehicle.model} {vehicle.year}
            </h2>
          </div>
          <div className="card-price">
          <h3>${vehicle.price} / day</h3>
            {/* <h3>{vehicle.avgRating} ★</h3> */}
          <EditVehicleFormModal setShowModal={setShowModal} vehicle={vehicle} />
          <button
              className="button"
              onClick={async () => {
                // event.stopPropagation();
                await dispatch(vehicleActions.deleteVehicleThunk(vehicle.id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleCardUser;

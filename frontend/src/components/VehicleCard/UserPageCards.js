import "./VehicleCardAll.css";
import EditVehicleFormModal from "../EditVehicleFormModal";
import { useDispatch } from "react-redux";
import * as vehicleActions from "../../store/vehicles"

function VehicleCardUser({ vehicle }) {
  const dispatch = useDispatch()
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={vehicle.previewImage} alt={""} />
          <div className="card-info">
            <h2>
              {vehicle.make} {vehicle.model} {vehicle.year}
            </h2>
            <h3>{vehicle.avgRating} ★</h3>
          </div>
          <div className="card-price">
          <EditVehicleFormModal vehicle={vehicle} />
          <button
              className="button"
              onClick={async () => {
                // event.stopPropagation();
                await dispatch(vehicleActions.deleteVehicleThunk(vehicle.id));
              }}
            >
              Delete Vehicle
            </button>
            <h2>${vehicle.price} /day</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleCardUser;

import "./VehicleCardAll.css";

function VehicleCardAll({ vehicle }) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={vehicle.previewImage} alt={""} />
          <div className="card-info">
            <h2>
              {vehicle.make} {vehicle.model} {vehicle.year}
            </h2>
            <h3>{vehicle.avgRating} ★ </h3>
          </div>
          {/* <div className="card-price">
            <h2>${vehicle.price} / day</h2>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default VehicleCardAll;

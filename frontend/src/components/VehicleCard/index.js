import "./VehicleCardAll.css";

function VehicleCardAll({ vehicle }) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={vehicle.previewImage} alt={""} />
          <div className="card-info">
            <h2>
            {vehicle.year} {vehicle.make} {vehicle.model}
            </h2>
          </div>
          <div className="card-price">
            <h3>${vehicle.price} / day</h3>

            <h3>{vehicle.avgRating} ★ </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleCardAll;

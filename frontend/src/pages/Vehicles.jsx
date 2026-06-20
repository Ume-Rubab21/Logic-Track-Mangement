import "./Vehicles.css";
import { Link } from "react-router-dom";

function Vehicles() {
  const vehicles = [
    {
      id: 1,
      number: "LEA-2045",
      type: "Delivery Truck",
      driver: "Ali Khan",
      capacity: "2500 kg",
      status: "Active",
      location: "Gulberg Lahore",
    },
    {
      id: 2,
      number: "LES-8891",
      type: "Cargo Van",
      driver: "Ahmed Raza",
      capacity: "1200 kg",
      status: "On Delivery",
      location: "Johar Town",
    },
    {
      id: 3,
      number: "LEB-4412",
      type: "Mini Truck",
      driver: "Usman Malik",
      capacity: "1800 kg",
      status: "Available",
      location: "Warehouse A",
    },
    {
      id: 4,
      number: "LEC-3321",
      type: "Pickup Vehicle",
      driver: "Hassan Ali",
      capacity: "900 kg",
      status: "Maintenance",
      location: "Service Center",
    },
  ];

  return (
    <div className="vehicles-page">
      <div className="vehicles-header">
        <div>
          <p className="vehicles-badge">Fleet Management Center</p>
          <h1>Manage Fleet Vehicles</h1>
          <p>
            View, monitor, and manage all vehicles used in delivery operations.
          </p>
        </div>

        <Link to="/vehicles/new">
          <button className="add-vehicle-btn">+ Add New Vehicle</button>
        </Link>
      </div>

      <section className="vehicle-summary">
        <div>
          <h2>04</h2>
          <p>Total Vehicles</p>
        </div>

        <div>
          <h2>02</h2>
          <p>Active</p>
        </div>

        <div>
          <h2>01</h2>
          <p>Available</p>
        </div>

        <div>
          <h2>01</h2>
          <p>Maintenance</p>
        </div>
      </section>

      <section className="vehicles-grid">
        {vehicles.map((vehicle) => (
          <div className="vehicle-card" key={vehicle.id}>
            <div className="vehicle-top">
              <div className="vehicle-icon">🚚</div>

              <span
                className={`vehicle-status ${vehicle.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {vehicle.status}
              </span>
            </div>

            <h2>{vehicle.number}</h2>
            <p className="vehicle-type">{vehicle.type}</p>

            <div className="vehicle-info">
              <p>
                <strong>Driver:</strong> {vehicle.driver}
              </p>

              <p>
                <strong>Capacity:</strong> {vehicle.capacity}
              </p>

              <p>
                <strong>Location:</strong> {vehicle.location}
              </p>
            </div>

            <div className="vehicle-actions">
              <button className="edit-vehicle-btn">Edit</button>
              <button className="delete-vehicle-btn">Delete</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Vehicles;
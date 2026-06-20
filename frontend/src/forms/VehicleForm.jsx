import { useState } from "react";
import "./VehicleForm.css";

function VehicleForm() {
  const [vehicle, setVehicle] = useState({
    vehicleNumber: "",
    vehicleType: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setVehicle({
      ...vehicle,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!vehicle.vehicleNumber.trim()) {
      newErrors.vehicleNumber = "Vehicle number is required";
    }

    if (!vehicle.vehicleType.trim()) {
      newErrors.vehicleType = "Vehicle type is required";
    }

    if (!vehicle.status) {
      newErrors.status = "Please select a status";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Vehicle Added Successfully");
    }
  }

  return (
    <div className="vehicle-form-page">
      <form className="vehicle-form" onSubmit={handleSubmit}>
        <h1>Add New Vehicle</h1>

        <div className="form-group">
          <label>Vehicle Number</label>

          <input
            type="text"
            name="vehicleNumber"
            value={vehicle.vehicleNumber}
            onChange={handleChange}
            placeholder="LEA-2045"
          />

          {errors.vehicleNumber && (
            <span className="error">
              {errors.vehicleNumber}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Vehicle Type</label>

          <input
            type="text"
            name="vehicleType"
            value={vehicle.vehicleType}
            onChange={handleChange}
            placeholder="Delivery Truck"
          />

          {errors.vehicleType && (
            <span className="error">
              {errors.vehicleType}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            name="status"
            value={vehicle.status}
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Available">Available</option>
            <option value="Maintenance">Maintenance</option>
          </select>

          {errors.status && (
            <span className="error">
              {errors.status}
            </span>
          )}
        </div>

        <button className="vehicle-submit-btn">
          Add Vehicle
        </button>
      </form>
    </div>
  );
}

export default VehicleForm;
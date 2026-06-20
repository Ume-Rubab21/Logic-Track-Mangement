import { useState } from "react";
import "./TaskForm.css";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    pickup: "",
    destination: "",
    driver: "",
    vehicle: "",
    priority: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setTask({
      ...task,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!task.title.trim())
      newErrors.title = "Task title is required";

    if (!task.pickup.trim())
      newErrors.pickup = "Pickup location is required";

    if (!task.destination.trim())
      newErrors.destination = "Destination is required";

    if (!task.driver.trim())
      newErrors.driver = "Driver name is required";

    if (!task.vehicle.trim())
      newErrors.vehicle = "Vehicle number is required";

    if (!task.priority)
      newErrors.priority = "Select a priority";

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Task Submitted Successfully");

      console.log(task);
    }
  }

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <h1>Create Delivery Task</h1>

        <div className="form-group">
          <label>Task Title</label>

          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />

          {errors.title && (
            <span className="error">{errors.title}</span>
          )}
        </div>

        <div className="form-group">
          <label>Pickup Location</label>

          <input
            type="text"
            name="pickup"
            value={task.pickup}
            onChange={handleChange}
            placeholder="Enter pickup location"
          />

          {errors.pickup && (
            <span className="error">{errors.pickup}</span>
          )}
        </div>

        <div className="form-group">
          <label>Destination</label>

          <input
            type="text"
            name="destination"
            value={task.destination}
            onChange={handleChange}
            placeholder="Enter destination"
          />

          {errors.destination && (
            <span className="error">{errors.destination}</span>
          )}
        </div>

        <div className="form-group">
          <label>Driver Name</label>

          <input
            type="text"
            name="driver"
            value={task.driver}
            onChange={handleChange}
            placeholder="Assigned driver"
          />

          {errors.driver && (
            <span className="error">{errors.driver}</span>
          )}
        </div>

        <div className="form-group">
          <label>Vehicle Number</label>

          <input
            type="text"
            name="vehicle"
            value={task.vehicle}
            onChange={handleChange}
            placeholder="Assigned vehicle"
          />

          {errors.vehicle && (
            <span className="error">{errors.vehicle}</span>
          )}
        </div>

        <div className="form-group">
          <label>Priority</label>

          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          {errors.priority && (
            <span className="error">{errors.priority}</span>
          )}
        </div>

        <button className="submit-btn">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
import "./Tasks.css";
import { Link } from "react-router-dom";

function Tasks() {
  const tasks = [
    {
      id: 1,
      title: "Deliver electronics to Gulberg",
      pickup: "Warehouse A",
      destination: "Gulberg Lahore",
      driver: "Ali Khan",
      vehicle: "LEA-2045",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Pickup parcels from warehouse",
      pickup: "Main Storage",
      destination: "Johar Town",
      driver: "Ahmed Raza",
      vehicle: "LES-8891",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Deliver medicines",
      pickup: "Medical Store",
      destination: "DHA Lahore",
      driver: "Usman Malik",
      vehicle: "LEB-4412",
      priority: "High",
      status: "Completed",
    },
    {
      id: 4,
      title: "Food package delivery",
      pickup: "Food Warehouse",
      destination: "Model Town",
      driver: "Hassan Ali",
      vehicle: "LEC-3321",
      priority: "Low",
      status: "In Progress",
    },
  ];

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <div>
          <p className="tasks-badge">Delivery Task Center</p>
          <h1>Manage Delivery Tasks</h1>
          <p>Create, assign, and monitor all delivery tasks in one place.</p>
        </div>

        <Link to="/tasks/new">
          <button className="add-task-btn">+ Add New Task</button>
        </Link>
      </div>

      <div className="task-summary">
        <div>
          <h2>04</h2>
          <p>Total Tasks</p>
        </div>

        <div>
          <h2>01</h2>
          <p>Pending</p>
        </div>

        <div>
          <h2>02</h2>
          <p>In Progress</p>
        </div>

        <div>
          <h2>01</h2>
          <p>Completed</p>
        </div>
      </div>

      <div className="tasks-container">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div className="task-card-header">
              <h2>{task.title}</h2>
              <span className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
            </div>

            <div className="task-info">
              <p>
                <strong>Pickup:</strong> {task.pickup}
              </p>
              <p>
                <strong>Destination:</strong> {task.destination}
              </p>
              <p>
                <strong>Driver:</strong> {task.driver}
              </p>
              <p>
                <strong>Vehicle:</strong> {task.vehicle}
              </p>
            </div>

            <div className="task-footer">
              <span
                className={`task-status ${task.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {task.status}
              </span>

              <div className="task-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
import "./Dashboard.css";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <div>
          <p className="dashboard-badge">Live Logistics Control Center</p>
          <h1>Dispatcher Dashboard</h1>
          <p className="dashboard-text">
            Manage deliveries, monitor vehicles, assign tasks, and track fleet
            performance from one powerful dashboard.
          </p>
        </div>

        <Link to="/tasks/new">
          <button className="dashboard-main-btn">+ Create New Task</button>
        </Link>
      </section>

      <section className="dashboard-cards">
        <div className="dashboard-card">
          <span className="card-icon blue">📦</span>
          <div>
            <h2>1,250</h2>
            <p>Total Deliveries</p>
          </div>
        </div>

        <div className="dashboard-card">
          <span className="card-icon orange">⏳</span>
          <div>
            <h2>48</h2>
            <p>Pending Tasks</p>
          </div>
        </div>

        <div className="dashboard-card">
          <span className="card-icon green">✅</span>
          <div>
            <h2>1,102</h2>
            <p>Completed</p>
          </div>
        </div>

        <div className="dashboard-card">
          <span className="card-icon purple">🚚</span>
          <div>
            <h2>85</h2>
            <p>Active Vehicles</p>
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="task-panel">
          <div className="panel-header">
            <h2>Recent Delivery Tasks</h2>
            <button>View All</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Driver</th>
                <th>Vehicle</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Deliver electronics to Gulberg</td>
                <td>Ali Khan</td>
                <td>LEA-2045</td>
                <td>High</td>
                <td><span className="status pending">Pending</span></td>
              </tr>

              <tr>
                <td>Pickup parcels from warehouse</td>
                <td>Ahmed Raza</td>
                <td>LES-8891</td>
                <td>Medium</td>
                <td><span className="status progress">In Progress</span></td>
              </tr>

              <tr>
                <td>Deliver medicines to Johar Town</td>
                <td>Usman Malik</td>
                <td>LEB-4412</td>
                <td>High</td>
                <td><span className="status completed">Completed</span></td>
              </tr>

              <tr>
                <td>Food package delivery to DHA</td>
                <td>Hassan Ali</td>
                <td>LEC-3321</td>
                <td>Low</td>
                <td><span className="status progress">In Progress</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="activity-panel">
          <h2>Activity Overview</h2>

          <div className="activity-item">
            <span>🚚</span>
            <p>Vehicle LEA-2045 assigned to a new delivery task.</p>
          </div>

          <div className="activity-item">
            <span>✅</span>
            <p>Usman Malik completed medicine delivery successfully.</p>
          </div>

          <div className="activity-item">
            <span>📦</span>
            <p>New parcel pickup task created by dispatcher.</p>
          </div>

          <div className="activity-item">
            <span>👤</span>
            <p>Ahmed Raza updated delivery status to in progress.</p>
          </div>
        </div>
      </section>

      <section className="bottom-grid">
        <div className="performance-card">
          <h2>Delivery Performance</h2>

          <div className="progress-box">
            <div className="progress-info">
              <span>Completed Deliveries</span>
              <b>88%</b>
            </div>
            <div className="progress-bar">
              <div className="progress-fill completed-fill"></div>
            </div>
          </div>

          <div className="progress-box">
            <div className="progress-info">
              <span>On-time Deliveries</span>
              <b>96%</b>
            </div>
            <div className="progress-bar">
              <div className="progress-fill time-fill"></div>
            </div>
          </div>

          <div className="progress-box">
            <div className="progress-info">
              <span>Vehicle Usage</span>
              <b>76%</b>
            </div>
            <div className="progress-bar">
              <div className="progress-fill vehicle-fill"></div>
            </div>
          </div>
        </div>

        <div className="driver-card">
          <h2>Top Drivers</h2>

          <div className="driver-row">
            <span>👨‍✈️ Ali Khan</span>
            <b>98%</b>
          </div>

          <div className="driver-row">
            <span>👨‍✈️ Ahmed Raza</span>
            <b>94%</b>
          </div>

          <div className="driver-row">
            <span>👨‍✈️ Usman Malik</span>
            <b>91%</b>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
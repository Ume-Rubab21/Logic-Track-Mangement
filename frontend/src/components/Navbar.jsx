import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon">L</div>

        <div className="logo-text">
          <h2>
            LOGI<span>TRACK</span>
          </h2>
          <p>Fleet & Delivery Platform</p>
        </div>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>

        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Login
              </NavLink>
            </li>

            <li>
              <NavLink to="/register" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Register
              </NavLink>
            </li>
          </>
        )}

        {isLoggedIn && (
          <>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/tasks" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Tasks
              </NavLink>
            </li>

            <li>
              <NavLink to="/vehicles" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Vehicles
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <div className="navbar-buttons">
        {!isLoggedIn ? (
          <>
            <button className="login-button" onClick={() => navigate("/login")}>
              Login
            </button>

            <button className="start-button" onClick={() => navigate("/register")}>
              Get Started
            </button>
          </>
        ) : (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
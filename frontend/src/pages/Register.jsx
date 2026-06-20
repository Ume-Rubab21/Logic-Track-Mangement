import { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.role
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Registration Successful");
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <select
            name="role"
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="dispatcher">
              Dispatcher
            </option>
            <option value="driver">
              Driver
            </option>
          </select>

          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
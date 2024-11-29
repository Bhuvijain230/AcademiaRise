import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      console.log("Form data being sent:", formData);
      const response = await axios.post("http://localhost:4000/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log("Server Response:", response.data);
      alert(response.data.message || "Signup successful!");
      toggleForm(); // Switch to login after successful signup
    } catch (error) {
      console.error("Error during signup:", error.response || error.message);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      alert(response.data.message || "Login successful!");
    } catch (error) {
      console.error("Error during login:", error.response || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      {isLogin ? (
        <div>
          <h2 className="text-center mb-4">Login</h2>
          <form className="p-4 border rounded bg-light" onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <button
              className="btn btn-link p-0"
              onClick={toggleForm}
              style={{ textDecoration: "none" }}
            >
              Sign up here
            </button>
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-center mb-4">Signup</h2>
          <form
            className="p-4 border rounded bg-light"
            onSubmit={handleSignup}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                onChange={handleChange}
                value={formData.confirmPassword}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
          </form>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <button
              className="btn btn-link p-0"
              onClick={toggleForm}
              style={{ textDecoration: "none" }}
            >
              Login here
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Signup;

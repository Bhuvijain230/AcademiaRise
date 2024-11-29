import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // To handle navigation
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./styles.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // Hook for navigation after successful login/signup

  // Toggle between Login and Signup forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      alert(response.data.message); // Show success message

      // Navigate to home page ("/academiarise") after successful login
      navigate("/AcademiaRise");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed"); // Show error
    }
  };

  // Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      alert(response.data.message); // Show success message
      toggleForm(); // Switch to login after successful signup
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed"); // Show error
    }
  };

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
          <Link to="/academiarise" className="nav-link">
            Home
          </Link>
          <Link to="/mentorconnect" className="nav-link">
            Connect
          </Link>
          <Link to="/events" className="nav-link">
          Events
          </Link>
          <Link to="/login" className="nav-link">
          Login
          </Link>

        </div>
      </nav>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {isLogin ? (
            // Login Form
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
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
            // Signup Form
            <div>
              <h2 className="text-center mb-4">Signup</h2>
              <form className="p-4 border rounded bg-light" onSubmit={handleSignup}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
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
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
      </div>
    </div>
    </>
  );
}

export default Login;

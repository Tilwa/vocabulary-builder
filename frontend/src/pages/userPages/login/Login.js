import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted: ", formData);
    // Add code here to handle login, such as calling an API
  };

  return (
    <>
      <div className="login">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Login</button>
            <div className="login-links">
              <a href="/forgot-password">Forgot Password?</a>
              <a href="/signup">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

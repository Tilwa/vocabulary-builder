import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    console.log("Form Data Submitted: ", formData);
    // Here you can add code to send form data to a backend or API
  };

  return (
    <>
      <div className="signup">
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
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
            <div className="form-control">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control checkbox">
              <label>
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                I agree with terms and conditions
              </label>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

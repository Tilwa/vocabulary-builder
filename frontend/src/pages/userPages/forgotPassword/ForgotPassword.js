import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password Request Submitted for:", email);
    // Add code here to handle the forgot password request, such as calling an API
  };

  return (
    <>
      <div className="forgot-password">
        <div className="forgot-password-container">
          <form className="forgot-password-form" onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

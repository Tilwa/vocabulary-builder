import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// website related pages
import HomePage from "./pages/websitePages/home/Home";
import AboutPage from "./pages/websitePages/about/About";
import ContactPage from "./pages/websitePages/contact/Contact";
import ErrorPage from "./pages/websitePages/notFound/NotFound";

// user related pages
import LoginPage from "./pages/userPages/login/Login";
import SignupPage from "./pages/userPages/signup/Signup";
import ForgotPasswordPage from "./pages/userPages/forgotPassword/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Website Related Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<ErrorPage />} />

        {/* User Related Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;

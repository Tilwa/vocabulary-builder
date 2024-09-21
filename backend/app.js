// app.js
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON data
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Welcome to Vocabulary Builder API!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

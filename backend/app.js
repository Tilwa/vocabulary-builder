const express = require("express");
const app = express();

app.get("/test", (req, res, next) => {
  res.json("this test route is working");
});

module.exports = app;

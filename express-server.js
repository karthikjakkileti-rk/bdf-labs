
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Express server!");
});

app.get("/about", (req, res) => {
  res.status(200).json({
    name: "J. Karthik",
    section: "CSE-QE-2A"
  });
});

app.get("/time", (req, res) => {
  res.status(200).send(new Date().toString());
});

app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});

app.listen(3000, () => {
  console.log("Express server running on port 3000");
});

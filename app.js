const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use([logger, authorize]);

app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about", logger, (req, res) => {
  res.send("About");
});
app.get("./api/products", (req, res) => {
  res.send("Products");
});
app.listen(5000, () => {
  console.log("Server is listening to port 5000...");
});

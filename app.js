const express = require("express");
const app = express();

//app.get
app.get("/", (req, res) => {
  console.log("User entered the resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource Not found</h1>");
});
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});

const express = require("express");
const app = express();
const { checkFlights } = require("./flight_controller");

app.get("/name", checkFlights);

app.listen(3001, function() {
  console.log("server running on port 3001");
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { checkFlights } = require("./flight_controller");

app.get("/api/flight/:source/:destination/:date", checkFlights);

app.listen(3001, function() {
  console.log("server running on port 3001");
});

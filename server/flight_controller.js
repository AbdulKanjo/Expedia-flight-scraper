checkFlights = (req, res, next) => {
  console.log("hello");

  var spawn = require("child_process").spawn;
  var process = spawn("python", [
    "./expedia.py",
    "miami",
    "dallas",
    "04/02/2019"
  ]);
  process.stdout.on("data", function(data) {
    res.send(data.toString());
  });
};
module.exports = {
  checkFlights
};

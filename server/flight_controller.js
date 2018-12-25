var moment = require("moment");

const checkFlights = (req, res, next) => {
  let { source, destination, date } = req.params;
  // Fix date
  var fromatedDate = date
    .toString(10)
    .split("")
    .map(function(t) {
      return parseInt(t);
    });
  var day = fromatedDate.slice(0, 2).join("");
  var month = fromatedDate.slice(2, 4).join("");
  var year = fromatedDate.slice(4, 8).join("");
  // console.log("hello", `${day}/${month}/${year}`);
  var spawn = require("child_process").spawn;
  var process = spawn("python", [
    "./expedia.py",
    source,
    destination,
    `${day}/${month}/${year}`
  ]);
  setTimeout(function() {
    const jsonfile = require("jsonfile");
    const file = __dirname + "/../new-flight-info.json";
    jsonfile.readFile(file, function(err, obj) {
      if (err) console.error(err);
      res.status(200).send(obj);
    });
  }, 2000);
};

module.exports = {
  checkFlights
};

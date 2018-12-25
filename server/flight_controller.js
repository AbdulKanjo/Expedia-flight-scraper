var moment = require("moment");

const checkFlights = (req, res, next) => {
  console.log("hello", req.params);
  let { source, destination, date } = req.params;
  var fromatedDate = date
    .toString(10)
    .split("")
    .map(function(t) {
      return parseInt(t);
    });
  var day = fromatedDate.slice(0, 2).join("");
  var month = fromatedDate.slice(2, 4).join("");
  var year = fromatedDate.slice(4, 8).join("");
  console.log("hello", `${day}/${month}/${year}`);
  //   console.log(formatedDate);

  var spawn = require("child_process").spawn;
  var process = spawn("python", [
    "./expedia.py",
    source,
    destination,
    `${day}/${month}/${year}`
  ]);
  process.stdout.on("data", function(data) {
    // res.send();
    res.status(200).send(data);
  });
};

module.exports = {
  checkFlights
};

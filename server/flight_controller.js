const checkFlights = (req, res, next) => {
  console.log("hello", req.params);
  let { source, destination, date } = req.params;
  //   var formatedDate = new Date(
  //     "date".replace(/(\d\d)(\d\d)(\d\d\d\d)/, "$3-$1-$2")
  //   );
  console.log(formatedDate);

  var spawn = require("child_process").spawn;
  var process = spawn("python", [
    "./expedia.py",
    source,
    destination,
    formatedDate
  ]);
  process.stdout.on("data", function(data) {
    res.send(data.toString());
  });
};

// const getAllStories = (req, res, next) => {
//   let { source, destination, date } = req.params;

//   const db = req.app.get("db");
//   db.get_stories([auth_id])
//     .then(post => res.status(200).send(post))
//     .catch(e => res.status(500).send("somethingiswrong"));
// };
module.exports = {
  checkFlights
};

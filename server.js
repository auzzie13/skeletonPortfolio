//Dependencies
var express = require("express");

// Create instance of express app
var app = express();

// Set the port for application
var PORT = process.env.PORT || 8080;


// // Initiate MySQL Connection.
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

//Parse request body as JSON
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});

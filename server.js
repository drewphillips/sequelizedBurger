
// var mysql = require('mysql');
var express = require("express");
var bodyParser = require("body-parser");
var app = express()
var PORT = process.env.PORT || 8080;

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "drew",
//   password: "password1",
//   database: "burger_db"


// Make connection.

// serving up our public folder
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// setting up and configuring handlebars as our templateing engine for our views
var exphbs = require("express-handlebars")
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// setting up our controller and using it as middleware
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

console.log("connected!");

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
  });




 
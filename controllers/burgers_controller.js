// Import the model (burger.js) to use its database functions.
var express = require("express");
var burgers = require("../models/burger.js");
//  
var db = require("../models/burger.js");


module.exports = function (app) {

  app.get("/", function (req, res) {
      console.log("working")

      db.burger.findAll().then(function (result) {
          // console.log(result)
          var hbsObject = {
              burger: result
          }

          res.render("index", hbsObject)
      })
  })

// Create routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   burgers.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

//post burgers to the page, not the table

// router.post("/create/burgers", function(req, res) {
//   // console.log(req.body.burgername);
//   burgers.create(req.body.name, function(results){
//     console.log(results);

//     res.redirect("/");
//   })
// });


app.post("/api/burgers", function (req, res) {
  db.burger.create({ burger_name: req.body.name }).then(function (result) {
       res.json(result)
   })
})
}

//add burgers to the mysql table

// router.put("/burgers/:id", function(req, res) {
//     burgers.update(req.params.id, function(result){
//       console.log(result);

//       res.sendStatus(200);
//     })
// });

// app.put("/burgers/:id", function (req, res) {
//   var condition = req.params.id;
//   console.log("condition", condition);
//   console.log(req.body);
 
//   db.burger.update({ devoured: req.body.devoured },
//       {
//           where: { id: condition }
//       }).then(function (result) {
//           res.json(result)
//       })
// })
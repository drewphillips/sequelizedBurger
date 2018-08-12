module.exports = function (sequelize, DataTypes) {
    
  var burger = sequelize.define("burger",{ 
      burger_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1, 50]
          }
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
      },
      
     

  });

  return burger;
  
} 


// module.exports = burger;




// var orm = require("../config/orm.js");


// var burger = {
//     all: function(cb) {
//       orm.all("burger", function(res) {
//         cb(res);
//       });
//     },
//     create: function(name, cb) {
//       orm.create("burger", [
//         "burgername", "devoured"
//       ], [
//         name, false
//       ], cb);
//     },
//     update: function(id, cb) {
//       var condition = "id=" + id;
//       orm.update("burger", {
//         devoured: true
//       }, condition, cb);
//     }
//   };

//   module.exports = burger;
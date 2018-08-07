var connection = require("../config/connection.js");

// selectAll() burgers
// insertOne() newBurger
// updateOne() isDevowered

// Export the orm object for the model burger.js .


// Helper Functions:
function printQuestionMarks(num){
    let arr = [];

    for(let i = 0; i < num; i++){
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob){
    let arr = []; 

    for(let key in ob){
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

// custom orm:

let orm = {
    all: function(tableInput, cb){
        let queryString = "Select * from " + tableInput + ";"

        connection.query(queryString, function(err, result){
            if(err){
                throw err
            }

            cb(result);
        })
    },
    create: function(table, cols, vals, cb){
        let queryString = "INSERT INTO " + table;

            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "Values (";
            queryString += printQuestionMarks(vals.length);
            queryString += ") "

        console.log("Create queryString: " + queryString);

        connection.query(queryString, vals, function(err, results){
            if(err){
                throw err;
            }

            cb(results);
        })

    },

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
}




module.exports = orm;

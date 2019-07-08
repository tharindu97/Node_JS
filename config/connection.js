var mysql = require('mysql');
var db;

var settings = {
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs'
};

function connectionDatabase(){
    if(!db){
        db = mysql.createConnection(settings);
        db.connect(function(err){
            if(!err){
                console.log("Database connected!");
            }else{
                console.log("Error Database!");
            }
        });
    }
    return db;
}

module.exports = connectionDatabase();
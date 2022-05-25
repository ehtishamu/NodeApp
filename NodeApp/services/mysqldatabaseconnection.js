'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConfig = require('./../config/mysqldatabase.config');
const dbConn = mysql.createConnection(dbConfig);
dbConn.connect(function (err) {
    if (err) { console.log("Connection not established to mysql database"); }
    console.log(err);
    console.log("Database Connected!");
});
module.exports = dbConn;
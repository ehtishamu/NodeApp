'use strict';
const mysql = require('mysql');
// mysql db connection
const dbConn = mysql.createConnection({
    host: 'gdsd1srv.mysql.database.azure.com',
    user: 'gdsd1', /* MySQL User */
    password: 'admin@123', /* MySQL Password */
    database: 'gsd', /* MySQL Database */
    port: 3306 /* MySQL port */
});
dbConn.connect(function (err) {
    if (err) { console.log("Connection not established to mysql database"); console.log(err);}
    console.log("Database Connected!");
});
module.exports = dbConn;


'use strict';
var dbConn = require('../config/mysqldatabase.config');
//ImageData object create
var ImageData = function (imageData) {
    this.id = imageData.id;
    this.title = imageData.title; 
    this.description = imageData.description;
    this.ipath = imageData.ipath;
};
ImageData.create = function (newData, result) {
    dbConn.query("INSERT INTO tbl_image_data set ?", newData, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
ImageData.findById = function (id, result) {
    dbConn.query("Select * from tbl_image_data where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
ImageData.findAll = function (result) {
    dbConn.query("Select * from tbl_image_data", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tbl_image_data : ', res);
            result(null, res);
        }
    });
};
ImageData.update = function (id, ImageData, result) {
    dbConn.query("UPDATE tbl_image_data SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [ImageData.first_name, ImageData.last_name, ImageData.email, ImageData.phone, ImageData.organization, ImageData.designation, ImageData.salary, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
ImageData.delete = function (id, result) {
    dbConn.query("DELETE FROM tbl_image_data WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = ImageData;
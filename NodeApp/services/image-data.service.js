'use strict';
const ImageData = require('./../models/image-data.model');
exports.findAll = function (req, res) {
    ImageData.findAll(function (err, imageData) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', imageData);
        res.send(imageData);
    });
};
exports.create = function (req, res) {
    const new_image = new ImageData(req.body);
    new_image.ipath = req.file.filename;
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        ImageData.create(new_image, function (err, imageData) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "ImageData added successfully!", data: imageData });
        });
    }
};
exports.findById = function (req, res) {
    ImageData.findById(req.params.id, function (err, imageData) {
        if (err)
            res.send(err);
        res.json(imageData);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        ImageData.update(req.params.id, new ImageData(req.body), function (err, imageData) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'ImageData successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    ImageData.delete(req.params.id, function (err, imageData) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'ImageData successfully deleted' });
    });
};
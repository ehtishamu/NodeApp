const express = require('express');
const router = express.Router();
const imageDataService = require('./../services/image-data.service');

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.normalize(__dirname + "./../uploads/"));
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

// Retrieve all images
router.get('/', imageDataService.findAll);
// Create a new image
router.post('/create', upload.single("ipath"), imageDataService.create);
// Retrieve a single image with id
router.get('/:id', imageDataService.findById);
// Update a image with id
router.put('/:id', imageDataService.update);
// Delete a image with id
router.delete('/:id', imageDataService.delete);
module.exports = router
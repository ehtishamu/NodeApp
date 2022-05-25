const express = require('express')
const router = express.Router()
const imageDataService = require('./../services/image-data.service');
// Retrieve all employees
router.get('/', imageDataService.findAll);
// Create a new employee
router.post('/', imageDataService.create);
// Retrieve a single employee with id
router.get('/:id', imageDataService.findById);
// Update a employee with id
router.put('/:id', imageDataService.update);
// Delete a employee with id
router.delete('/:id', imageDataService.delete);
module.exports = router
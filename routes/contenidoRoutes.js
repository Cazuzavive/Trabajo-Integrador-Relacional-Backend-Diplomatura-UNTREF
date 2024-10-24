const express = require('express');
const router = express.Router();
const db = require('../conexion/database');

// Routes for CRUD
router.get('/', (req, res) => {
    // Get all content
});

router.get('/:id', (req, res) => {
    // Get content by ID
});

router.post('/', (req, res) => {
    // Add new content
});

// Update content by ID
router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {
    // Delete content by ID
});

module.exports = router;

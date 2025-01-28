const express = require('express');
const router = express.Router();
const { getNFTMetadata } = require('../controllers/nftController');

// Define the route
router.post('/metadata', getNFTMetadata);

module.exports = router;
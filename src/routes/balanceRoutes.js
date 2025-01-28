const express = require('express');
const router = express.Router();
const { getTokenBalance } = require('../controllers/balanceController');

// Define the route for balance check
router.post('/token', getTokenBalance);

module.exports = router;
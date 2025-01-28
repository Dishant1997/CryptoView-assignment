const express = require('express');
const router = express.Router();
const { getTokenBalance } = require('../controllers/balanceController');
const { getNFTMetadata } = require('../controllers/nftController');

// Define the route for NFT
router.post('/nft/metadata', getNFTMetadata);
// Define the route for balance check
router.post('/balance/token', getTokenBalance);

module.exports = router;
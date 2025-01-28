const mongoose = require('mongoose');

// Define the NFT schema
const nftSchema = new mongoose.Schema({
  contractAddress: { type: String, required: true },
  tokenId: { type: String, required: true },
  tokenURI: { type: String, required: true },
});

// Create the NFT model
const NFT = mongoose.model('NFT', nftSchema);

module.exports = NFT;
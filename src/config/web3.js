const Web3 = require('web3');
const dotenv = require('dotenv');

dotenv.config();

// Create a new Web3 instance with an HTTP provider
const web3 = new Web3(process.env.WEB3_PROVIDER_URL);

module.exports = web3;
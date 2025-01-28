const web3 = require('../config/web3');
const NFT = require('../models/NFT');

const getNFTMetadata = async (req, res) => {
  const { contractAddress, tokenId } = req.body;

  if (!web3.utils.isAddress(contractAddress)) {
    return res.status(400).json({ error: 'Invalid contract address' });
  }

  try {
    const contract = new web3.eth.Contract([
      // ABI definition for ERC-721 token (simplified for metadata)
      {
        constant: true,
        inputs: [{ name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ name: '', type: 'string' }],
        type: 'function',
      },
    ], contractAddress);

    const tokenURI = await contract.methods.tokenURI(tokenId).call();

    // Parse metadata from the tokenURI (assuming it's hosted on IPFS or a URL)
    const metadata = { contractAddress, tokenId, tokenURI };

    // Store in MongoDB
    await NFT.create(metadata);

    res.json(metadata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch metadata' });
  }
};

module.exports = { getNFTMetadata };
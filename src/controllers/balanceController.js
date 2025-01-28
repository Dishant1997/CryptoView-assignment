const web3 = require('../config/web3');

// ERC-20 ABI fragment to interact with the balanceOf function
const erc20ABI = [
  {
    "constant": true,
    "inputs": [{ "name": "_owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "balance", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

// Function to get token balance
const getTokenBalance = async (req, res) => {
  const { tokenAddress, walletAddress } = req.body;

  if (!web3.utils.isAddress(tokenAddress) || !web3.utils.isAddress(walletAddress)) {
    return res.status(400).json({ error: 'Invalid address' });
  }

  try {
    // Create a contract instance
    const contract = new web3.eth.Contract(erc20ABI, tokenAddress);

    // Get the balance of the wallet
    const balance = await contract.methods.balanceOf(walletAddress).call();

    // Convert the balance from wei (or smallest unit) to token decimals
    const decimals = await contract.methods.decimals().call();
    const formattedBalance = web3.utils.fromWei(balance, 'ether'); // You can adjust the unit depending on the token's decimals

    res.json({
      walletAddress,
      tokenAddress,
      balance: formattedBalance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the balance.' });
  }
};

module.exports = { getTokenBalance };
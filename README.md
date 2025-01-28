# NFT Metadata Retrieval and Token Balance Retrieval API

This project demonstrates two key blockchain-related challenges: retrieving NFT metadata and token balances using the Web3.js library. It connects to the Ethereum blockchain using Infura (or a similar Web3 provider) and interacts with the smart contracts to fetch token balances and NFT metadata.

## Table of Contents
1. [Challenges](#challenges)
2. [Tech Stack](#tech-stack)
3. [Setup Instructions](#setup-instructions)
4. [Testing the API](#testing-the-api)
5. [Error Handling and Considerations](#error-handling-and-considerations)

---

## Challenges

### **1. NFT Metadata Retrieval and Storage**

**Objective:**  
Create an API endpoint that accepts an NFT contract address and token ID, queries the blockchain to retrieve metadata (name, description, image URL) from the NFT contract, stores it in MongoDB, and returns the metadata to the user.

#### Steps:
1. Set up the Web3.js connection to interact with the Ethereum blockchain.
2. Retrieve the metadata from the provided NFT contract address and token ID.
3. Store the retrieved metadata in MongoDB.
4. Return the metadata (name, description, image URL) in the response.

### **2. Token Balance Retrieval**

**Objective:**  
Build an API endpoint that accepts a token contract address and a wallet address, retrieves the balance of the specified ERC-20 token held by the wallet address, and returns the balance.

#### Steps:
1. Set up the Web3.js connection to interact with the Ethereum blockchain.
2. Interact with the ERC-20 token contract using the `balanceOf` function.
3. Return the balance in a user-friendly format.

---

## Tech Stack

- **Node.js** - Backend runtime environment.
- **Express.js** - Web framework for creating RESTful API endpoints.
- **Web3.js** - Ethereum JavaScript library to interact with the blockchain.
- **MongoDB** - NoSQL database to store NFT metadata.
- **dotenv** - Environment variable management.
- **CORS** (Optional) - If exposing the API to the frontend.
- **Nodemon** - Auto-reloading for faster development.

---

## Setup Instructions
```bash
### 1. Clone the Repository

git clone https://github.com/Dishant1997/CryptoView-assignment.git
cd CryptoView-assignment

### 2. Install Dependencies
npm install

### 3. Create and Configure .env File
WEB3_PROVIDER_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
MONGODB_URI=mongodb://localhost:27017/nft_metadata
PORT=5000

### 4. Run the Application
npm run dev

Endpoint: POST /api/nft/metadata
Endpoint: POST /api/balance/token
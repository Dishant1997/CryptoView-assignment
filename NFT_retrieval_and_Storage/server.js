const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const nftRoutes = require('./src/routes/nftRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/nft', nftRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
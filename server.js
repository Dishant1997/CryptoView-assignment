const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const nftRoutes = require('./src/routes/nftRoutes');
const balanceRoutes = require('./src/routes/balanceRoutes')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/nft', nftRoutes);
app.use('/api/balance', balanceRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
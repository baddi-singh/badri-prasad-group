const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const colors = require('colors');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database Connection Logic
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.error(`❌ Connection Error: ${error.message}`.red.bold);
    // Agar password galat hai toh yahan error dikhega
    process.exit(1);
  }
};

connectDB();

app.get('/', (req, res) => {
  res.send('Badri Prasad Enterprise Portal API is Running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();
await connectDB();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL
    ? process.env.CLIENT_URL.split(',').map(url => url.trim())
    : 'http://localhost:5173'
}));

app.use(express.json());

const bookings = [];

app.get('/api/health', (req, res) => {
  res.json({ message: 'Fitness Booking API is running' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Personalized Fitness Class Booking Platform API' });
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

app.post('/api/bookings', (req, res) => {
  const { name, email, date, className } = req.body;

  if (!name || !email || !date || !className) {
    return res.status(400).json({
      message: 'Please provide name, email, date, and className.'
    });
  }

  const booking = {
    id: Date.now().toString(),
    name,
    email,
    date,
    className
  };

  bookings.push(booking);

  res.status(201).json({
    message: 'Booking submitted successfully!',
    booking
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

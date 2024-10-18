import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

// Load environment variables
dotenv.config();


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

// Create Express app
const app = express();

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000!!!');
});


app.get('/test', (req , res) => {

    res.send('Hello World!');
})

app.use('/api/user', userRouter);
import express, { Request, Response } from 'express';
// import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(express.json());

// Example route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express and Mongoose!');
});

// MongoDB connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/mydb');
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error(err);
//   }
// };

// connectDB();

export default app;

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = 4000;

//MIDDLE WARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//DB
connectDB();

//Routes
app.use ('/api/auth', userRouter);

app.get('/', (req, res) => {
  res.send('API is running....');
}
);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
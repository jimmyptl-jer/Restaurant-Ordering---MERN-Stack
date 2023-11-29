import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './config/db.js'
import menuRoutes from './routes/menuRoutes.js'
import { getMenu, newMenuItem } from './controller/menuController.js'

dotenv.config()

const app = express();

app.use(cors());

// Establish a connection to the MongoDB database
connectDB();

// Define the port where the server will listen (use the provided PORT or default to 5000)
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/menu',menuRoutes);

// Route: Handle the root URL ('/') with a simple response
app.get('/', (req, res, next) => res.send('Server is Ready'));

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);

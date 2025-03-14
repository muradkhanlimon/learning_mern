import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
// import Product from './models/product.model.js';
// import mongoose from 'mongoose';
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); //allows us to accept JSON data in the body

app.use("/api/products", productRoutes);

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});


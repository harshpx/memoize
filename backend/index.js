import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import http from 'http';
import colors from 'colors';
import connectDB from './utils/db.js';
import errorHandler from './middlewares/errorMiddleware.js';
import noteRoutes from './routes/noteRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/notes',noteRoutes);
app.use('/api/users',userRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000;
const server = http.createServer(app);

// mongoose.connect(process.env.MONGO_URI).then(()=>{
//     console.log(`Database connected`);
//     server.listen(port,()=>{
//         console.log(`Server running on port: ${port}`);
//     })
// }).catch(err=>{
//     console.log(err);
//     process.exit(1);
// })
server.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
})
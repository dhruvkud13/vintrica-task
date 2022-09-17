import express from 'express'
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import detailsRoute from './routes/details.js';
import registrationRoute from './routes/registration.js';
import  cors  from "cors";

const app= express();
dotenv.config();

const connect =async () => {
    // await mongoose.connect(process.env.MONGO)
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongo");
      } catch (error) {
        throw error;
      }
  };

mongoose.connection.on('disconnected',()=>{
    console.log("Disconnected from MongoDB");
})

//adding middlewares
// middlewares are able to reach our req or response
// when user makes api req server checks all routes here
app.use(cookieParser())
app.use(express.json())
// as we cant send json data directly to express server
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
})

app.use('/api/details',detailsRoute);
app.use('/api/registration',registrationRoute);

//error handling middleware
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong';
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(8000,()=>{
    connect();
    console.log('backend connected')
})
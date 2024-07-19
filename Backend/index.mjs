import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import router from './routes/Product_Routes.mjs';
import UserRouter from './routes/User_routes.mjs';
import cookieRouter from './routes/Cookie_routes.mjs';
import cookieParser from "cookie-parser";
import logoutRouter from './routes/LogOut.mjs';

const app = express();
var corsoption={
  origin:"http://localhost:5173", //origin from where you requesting
  credentials:true
  }
app.use(cors(corsoption));
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));//remove if gives frontend issues or set to true
app.use(express.json());
app.use('/api',router);
app.use('/api',UserRouter);
app.use('/api',cookieRouter);
app.use('/api',logoutRouter);

mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
  console.log('connected to DB on port '+process.env.PORT);
}).catch(error=>{
  console.log(error);
});

app.listen(process.env.PORT);
import express from 'express';
import notesRoutes from './route/notesRoutes.js';
import {connectdb} from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();


connectdb();


const port = process.env.PORT || 5001;
const app = express();

//middlewares
app.use(express.json());

app.use('/api/notes', notesRoutes);

app.listen(5001,()=>{
    console.log("server is running on port:", port);
})

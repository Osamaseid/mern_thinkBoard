import express from 'express';
import notesRoutes from './route/notesRoutes.js';
import {connectdb} from './config/db.js';


connectdb();

const port = process.env.PORT || 5001;
const app = express();

app.use('/api/notes', notesRoutes);

app.listen(5001,()=>{
    console.log("server is running on port:", port);
})

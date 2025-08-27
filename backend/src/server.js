import express from 'express';
import notesRoutes from './route/notesRoutes.js';
import {connectdb} from './config/db.js';

connectdb();


const app = express();

app.use('/api/notes', notesRoutes);

app.listen(5001,()=>{
    console.log("server is running on port 5001");
})

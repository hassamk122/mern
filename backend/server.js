import express from "express";
import mongoose from "mongoose";
import taskRouter from "./routes/task.js";
const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://localhost:27017/task-tracker')
.then(()=>console.log("connected to mongoDB"))
.catch((error)=>console.error("Could not connect to mongo DB"));


app.use(express.json());
app.use('/api',taskRouter);



app.listen(PORT, () => console.log(`Server starting at ${PORT}`));

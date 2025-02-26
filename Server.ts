import express from 'express'
const dotenv =require('dotenv')
import cors from 'cors'
const app =express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true,
}));

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port =process.env.PORT || 8080;
 app.listen(port,()=>{
     console.log("Application is started on port :"+port)
 })


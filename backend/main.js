import express from "express"
import connection from "./db.js"
import { userRouter } from "./routers/router.js"
import cors from "cors"
const app=express()
const Port=2999
connection()

app.use(cors({
    origin: ["https://fitness-buddy-app.onrender.com", "http://localhost:5173"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));



// const cors = require('cors'); app.use(cors({ origin: [ "http://localhost:5173", // Allow localhost during development "https://fitness-buddy-app.onrender.com" // Allow production domain ], methods: ["GET", "POST", "PUT", "DELETE"], allowedHeaders: ["Content-Type", "Authorization"], credentials: true, // Allows cookies or headers to be sent along with requests }));







app.use(express.json())
app.use(userRouter)



app.listen(Port,()=>{
    console.log(`server started at port ${Port}`);
})


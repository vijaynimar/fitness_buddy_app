import express from "express"
import connection from "./db.js"
import { userRouter } from "./routers/router.js"
import cors from "cors"
const app=express()
const Port=2999
connection()

app.use(cors({
    origin: "https://fitness-buddy-app.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],  
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true 
}));




app.use(express.json())
app.use(userRouter)



app.listen(Port,()=>{
    console.log(`server started at port ${Port}`);
})


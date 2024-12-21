import express from "express"
import connection from "./db.js"
import { userRouter } from "./routers/router.js"
import { workout } from "./models/workoutTracking.js"
import cron from "node-cron"
import cors from "cors"
const app=express()
const Port=2999
connection()

app.use(cors({
    origin: ["https://fitness-buddy-app.onrender.com", "http://localhost:5173","http://localhost:5174"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
cron.schedule("1 0 * * 1",async()=>{
    try{
        await workout.deleteMany({})
    }catch(err){
        console.log("error in node:cron");
    }
})


// const cors = require('cors'); app.use(cors({ origin: [ "http://localhost:5173", // Allow localhost during development "https://fitness-buddy-app.onrender.com" // Allow production domain ], methods: ["GET", "POST", "PUT", "DELETE"], allowedHeaders: ["Content-Type", "Authorization"], credentials: true, // Allows cookies or headers to be sent along with requests }));







app.use(express.json())
app.use(userRouter)



app.listen(Port,()=>{
    console.log(`server started at port ${Port}`);
})































// import express from "express"
// import connection from "./db.js"
// import { userRouter } from "./routers/router.js"
// import { workout } from "./models/workoutTracking.js"
// import cron from "node-cron"
// import multer from "multer"
// import crypto from "node:crypto"
// import cors from "cors"
// import path from "path"
// const app=express()
// const Port=2999
// connection()

// app.use(cors({
//     origin: ["https://fitness-buddy-app.onrender.com", "http://localhost:5173","http://localhost:5174","http://localhost:5173","http://localhost:2999/upload"], 
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true
// }));
// cron.schedule("1 0 * * 1",async()=>{
//     try{
//         await workout.deleteMany({})
//     }catch(err){
//         console.log("error in node:cron");
//     }
// })


// // const cors = require('cors'); app.use(cors({ origin: [ "http://localhost:5173", // Allow localhost during development "https://fitness-buddy-app.onrender.com" // Allow production domain ], methods: ["GET", "POST", "PUT", "DELETE"], allowedHeaders: ["Content-Type", "Authorization"], credentials: true, // Allows cookies or headers to be sent along with requests }));






// app.use(express.json())
// app.use(userRouter)

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './frontendImage/profile/uploads')
//     },
//     filename: function (req, file, cb) {
//         console.log(file.originalname);
//         crypto.randomBytes(12,(err,bytes)=>{
//             const fn=bytes.toString("hex")+ path.extname(file.originalname);
//         })
//       cb(null,fn )
//     }
//   })
  
//   const upload = multer({ storage: storage })




// app.post("/upload",upload.single("profile"),(req,res)=>{
//     console.log(req.file);
//     res.send("upload")
// })


// app.listen(Port,()=>{
//     console.log(`server started at port ${Port}`);
// })


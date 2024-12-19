import {Schema,model} from "mongoose"


const profileSchema=new Schema({
    name:{type:String,required:true},
    location:{
        type:{
            lattitude:{
                type:Number,
                required:true
            },
            longitude:{
                type:Number,
                required:true
            }
        },
        required:true
    },
    preferredWorkout:{
        type:String,
        required:true,
        enum:["Yoga", "Running", "Weightlifting"]
    },
    fitneddGoals:{type:String,required:true},
    profilePicture:{type:URL},



})



// const { Schema, model } = require('mongoose');

// const profileSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     location: {
//       type: {
//         latitude: {
//           type: Number,  // Latitude stored as a number
//           required: true,
//         },
//         longitude: {
//           type: Number,  // Longitude stored as a number
//           required: true,
//         },
//       },
//       required: true,
//     },
//     preferredWorkouts: {
//       type: String,
//       required: true,
//       enum: ["Yoga", "Running", "Weightlifting"],
//     },
//     fitnessGoals: {
//       type: String,
//       required: true,
//     },
//     profilePicture: {
//       type: String, // Store the URL or file path
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     userId: { 
//       type: Schema.Types.ObjectId, 
//       ref: "User",
//       required: true,
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );


// const Profile = model("Profile", profileSchema);
// module.exports = Profile;

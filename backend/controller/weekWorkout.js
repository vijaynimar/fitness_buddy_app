import { workout } from "../models/workoutTracking.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const jwtKey = process.env.Jwt_password;
const caloriesBrn=[20,7,5,15]
const workouts=["running","weightlifting","yoga","cardio"]




export const workoutUpdate = async (req, res) => {
  const token = req.headers["authorization"];
  const { preferredWorkout, workoutDuration } = req.body;
  console.log(typeof workoutDuration);
  // console.log(preferredWorkout,workoutDuration);
  
  try {
    let h=0
        for(let i=0;i<workouts.length;i++){
            if(preferredWorkout==workouts[i]){
                // console.log(caloriesBrn[i]);
                // console.log(workouts[i]);
                h=i
                break
            }
        }  
    const totalCaloriesBurn=workoutDuration*caloriesBrn[h]
    // console.log(caloriesBurn);
   
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    
    const currentDayIndex = new Date().getDay();
    const currentDay =   daysOfWeek[currentDayIndex]
    // console.log(currentDay);
   
    const decoded = jwt.verify(token, jwtKey);
    const { username, email } = decoded;

    
    let data = await workout.findOne({ email });
// console.log(data);
    if (!data) {
      
      const newWorkoutData = new workout({
        email: email,
        weekWorkouts: {
          [currentDay]: [
            {
              preferredWorkout,
              workoutDuration,
              caloriesBurn:totalCaloriesBurn
            },
          ],
        },
      });

      console.log(newWorkoutData);
      await newWorkoutData.save();

      return res
        .status(200)
        .json({email, message: `Workout data saved for ${currentDay}`, data: newWorkoutData});
    }

    
    if (!data.weekWorkouts[currentDay]) {
      
      data.weekWorkouts[currentDay] = [];
    }

    
    data.weekWorkouts[currentDay].push({
      preferredWorkout,
      workoutDuration,
      caloriesBurn:totalCaloriesBurn
    });

   
    await data.save();

   
    return res
      .status(200)
      .json({ message: `Workout data updated for ${currentDay}`, data: data });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Error updating workout data", details: err.message });
  }
};























// import { workout } from "../models/workoutTracking.js";
// import jwt from "jsonwebtoken";
// import "dotenv/config";

// const jwtKey = process.env.Jwt_password;
// const caloriesBrn = [20, 7, 5, 15];
// const workouts = ["running", "weightlifting", "yoga", "cardio"];

// export const workoutUpdate = async (req, res) => {
//   const token = req.headers["authorization"];
//   const { workoutType, workoutDuration } = req.body;

//   try {
//     let h = 0;
//     for (let i = 0; i < workouts.length; i++) {
//       if (workoutType == workouts[i]) {
//         console.log(caloriesBrn[i]);
//         console.log(workouts[i]);
//         h = i;
//         break;
//       }
//     }
//     const totalCaloriesBurn = workoutDuration * caloriesBrn[h];
//     console.log(totalCaloriesBurn);
//     // Define the days of the week
//     const daysOfWeek = [
//       "sunday",
//       "monday",
//       "tuesday",
//       "wednesday",
//       "thursday",
//       "friday",
//       "saturday",
//     ];

//     const currentDayIndex = new Date().getDay();
//     const currentDay = daysOfWeek[currentDayIndex];

//     const decoded = jwt.verify(token, jwtKey);
//     const { username, email } = decoded;

//     let data = await workout.find({ email });

//     if (!data) {
//       const newWorkoutData = new workout({
//         email: email,
//         weekWorkouts: {
//           [currentDay]: [
//             {
//               workoutType,
//               workoutDuration,
//               caloriesBurn: totalCaloriesBurn,
//             },
//           ],
//         },
//       });

//       await newWorkoutData.save();

//       return res
//         .status(200)
//         .json({
//           email,
//           message: `Workout data saved for ${currentDay}`,
//           data: newWorkoutData,
//         });
//     }

//     if (data[0].weekWorkouts[currentDay] == null) {
//       data[0].weekWorkouts[currentDay] = [];
//     }

//     data[0].weekWorkouts[currentDay].push({
//       workoutType,
//       workoutDuration,
//     });

//     await data.save();

//     return res
//       .status(200)
//       .json({ message: `Workout data updated for ${currentDay}`, data: data });
//   } catch (err) {
//     console.log(err);
//     return res
//       .status(403)
//       .json({ error: "Error updating workout data", details: err.message });
//   }
// };

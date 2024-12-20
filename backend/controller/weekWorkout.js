// import { workout } from "../models/workoutTracking.js";
// import jwt from "jsonwebtoken";
// import "dotenv/config";

// const jwtKey = process.env.Jwt_password;
// const caloriesBrn=[20,7,5,15]
// const workouts=["running","weightlifting","yoga","cardio"]




// export const workoutUpdate = async (req, res) => {
//   const token = req.headers["authorization"];
//   const { preferredWorkout, workoutDuration } = req.body;
//   console.log(typeof workoutDuration);
//   // console.log(preferredWorkout,workoutDuration);
  
//   try {
//     let h=0
//         for(let i=0;i<workouts.length;i++){
//             if(preferredWorkout==workouts[i]){
//                 // console.log(caloriesBrn[i]);
//                 // console.log(workouts[i]);
//                 h=i
//                 break
//             }
//         }  
//     const totalCaloriesBurn=workoutDuration*caloriesBrn[h]
//     // console.log(caloriesBurn);
   
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
//     const currentDay =   daysOfWeek[currentDayIndex]
//     // console.log(currentDay);
   
//     const decoded = jwt.verify(token, jwtKey);
//     const { username, email } = decoded;

    
//     let data = await workout.findOne({ email });
// // console.log(data);
//     if (!data) {
      
//       const newWorkoutData = new workout({
//         email: email,
//         weekWorkouts: {
//           [currentDay]: [
//             {
//               preferredWorkout,
//               workoutDuration,
//               caloriesBurn:totalCaloriesBurn
//             },
//           ],
//         },
//       });

//       console.log(newWorkoutData);
//       await newWorkoutData.save();

//       return res
//         .status(200)
//         .json({newWorkoutData});
//   }

    
//     if (!data.weekWorkouts[currentDay]) {
      
//       data.weekWorkouts[currentDay] = [];
//     }

    
//     data.weekWorkouts[currentDay].push({
//       preferredWorkout,
//       workoutDuration,
//       caloriesBurn:totalCaloriesBurn
//     });

   
//     await data.save();

   
//     return res
//       .status(200)
//       .json({ message: `Workout data updated for ${currentDay}`, data: data });

//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Error updating workout data", details: err.message });
//   }
// };







import { workout } from "../models/workoutTracking.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const jwtKey = process.env.Jwt_password;
const caloriesBrn = [20, 7, 5, 15];
const workouts = ["running", "weightlifting", "yoga", "cardio"];

export const workoutUpdate = async (req, res) => {
  const token = req.headers["authorization"];
  const { preferredWorkout, workoutDuration } = req.body;

  try {
    let h = 0;
    // Find the index of the preferred workout
    for (let i = 0; i < workouts.length; i++) {
      if (preferredWorkout == workouts[i]) {
        h = i;
        break;
      }
    }

    // Calculate total calories burned based on the workout duration
    const totalCaloriesBurn = workoutDuration * caloriesBrn[h];

    // Define the days of the week
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    // Get the current day index and map it to the day name
    const currentDayIndex = new Date().getDay();
    const currentDay = daysOfWeek[currentDayIndex];

    // Decode the JWT token
    const decoded = jwt.verify(token, jwtKey);
    const { username, email } = decoded;

    // Find the user's workout data based on email
    let data = await workout.findOne({ email });

    if (!data) {
      // If no workout data exists for the user, create new data
      const newWorkoutData = new workout({
        email: email,
        weekWorkouts: {
          [currentDay]: [
            {
              preferredWorkout,
              workoutDuration,
              caloriesBurn: totalCaloriesBurn,
            },
          ],
        },
      });

      // Save the new workout data to the database
      await newWorkoutData.save();

      return res
        .status(200)
        .json({
          message: `Workout data saved for ${currentDay}`,
          data: newWorkoutData.weekWorkouts[currentDay], // Send only today's workout data
        });
    }

    // If the user already has workout data, update the current day's data
    if (!data.weekWorkouts[currentDay]) {
      data.weekWorkouts[currentDay] = [];
    }

    // Add the new workout data for today
    data.weekWorkouts[currentDay].push({
      preferredWorkout,
      workoutDuration,
      caloriesBurn: totalCaloriesBurn,
    });

    // Save the updated workout data to the database
    await data.save();

    return res
      .status(200)
      .json({
        message: `Workout data updated for ${currentDay}`,
        data: data.weekWorkouts[currentDay], // Send only today's workout data
      });
 
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: "Error updating workout data", details: err.message });
  }
};

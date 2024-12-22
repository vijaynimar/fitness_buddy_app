import { workout } from "../models/workoutTracking.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const jwtKey = process.env.Jwt_password;
export const getWorkoutDataForDay = async (req, res) => {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const currentDayIndex = new Date().getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    console.log(currentDay);
    const token = req.headers["authorization"];
  
    try {
      const decoded = jwt.verify(token, jwtKey);
      const { email } = decoded;
  
      // Find the user's workout data based on email
      let data = await workout.findOne({ email });
  
      if (!data) {
        return res.status(404).json({ message: "No workout data found for the user." });
      }
  
      // Check if data exists for the specific day (current day)
      const dayWorkouts = data.weekWorkouts[currentDay];
  
      if (!dayWorkouts || dayWorkouts.length === 0) {
        return res.status(404).json({ message: `No workout data found for ${currentDay}.` });
      }
  
      console.log("Day workouts for today:", dayWorkouts); // Check if workouts exist for today
      
      // Calculate the total workout duration and total calories burned
      const totalWorkoutDuration = dayWorkouts.reduce((acc, workout) => acc + workout.workoutDuration, 0);
      console.log("Total Workout Duration:", totalWorkoutDuration);
  
      const totalCaloriesBurned = dayWorkouts.reduce((acc, workout) => acc + workout.caloriesBurn, 0);
      console.log("Total Calories Burned:", totalCaloriesBurned);
  
      return res.status(200).json({
        message: `${currentDay}`,
        totalWorkoutDuration,
        totalCaloriesBurned,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Error fetching workout data", details: err.message });
    }
  };
  
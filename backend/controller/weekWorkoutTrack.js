import { workout } from "../models/workoutTracking.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
const jwtKey = process.env.Jwt_password;

export const weeklyProgress = async (req, res) => {
    const token = req.headers["authorization"];
    try {
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
      const currentDay = daysOfWeek[currentDayIndex];
  
      const decoded = jwt.verify(token, jwtKey);
      const { email } = decoded;
      
      let data = await workout.findOne({ email });
      console.log(data);
      if (!data) {
        return res.status(404).json({ error: "No workout data found for this user." });
      }
  
      const startOfWeekIndex = daysOfWeek.indexOf("monday");
  
      let totalCaloriesBurned = 0;
      let totalDuration = 0;
  
      for (let i = startOfWeekIndex; i <= currentDayIndex; i++) {
        const day = daysOfWeek[i];
  
        if (data.weekWorkouts[day]) {
          data.weekWorkouts[day].forEach(workout => {
            const caloriesBurn = workout.caloriesBurn || 0; 
            totalCaloriesBurned += caloriesBurn;
            totalDuration += workout.workoutDuration;
          });
        }
      }
  
      return res.status(200).json({
        message: `Weekly progress from Monday to ${currentDay}`,
        data: {
          totalCaloriesBurned,
          totalDuration,
          caloriesBurn
        },
      });
  
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Error fetching weekly progress", details: err.message });
    }
  };
  
import { workout } from "../models/workoutTracking.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const jwtKey = process.env.Jwt_password;

export const getWorkoutDataForDay = async (req, res) => {
  // Define the days of the week
  const daysOfWeek = [
    "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
  ];

  // Get the current day index and map it to the day name
  const currentDayIndex = new Date().getDay();
  const currentDay = daysOfWeek[currentDayIndex];

  const token = req.headers["authorization"];

  try {
    // Decode the JWT token to get user information
    const decoded = jwt.verify(token, jwtKey);
    const { email } = decoded;

    // Find the user's workout data
    let data = await workout.findOne({ email });

    if (!data) {
      return res.status(404).json({ message: "No workout data found for the user." });
    }

    // Check if data exists for the specific day (current day)
    const dayWorkouts = data.weekWorkouts[currentDay];

    if (!dayWorkouts || dayWorkouts.length === 0) {
      return res.status(404).json({ message: `No workout data found for ${currentDay}.` });
    }

    // Calculate the total workout duration and total calories burned for the specified day
    const totalWorkoutDuration = dayWorkouts.reduce(
      (acc, workout) => acc + workout.workoutDuration,
      0
    );

    const totalCaloriesBurned = dayWorkouts.reduce(
      (acc, workout) => acc + workout.caloriesBurn,
      0
    );

    return res.status(200).json({
      message: `Total workout data for ${currentDay}`,
      totalWorkoutDuration,
      totalCaloriesBurned,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Error fetching workout data", details: err.message });
  }
};

import { Schema ,model} from "mongoose";

const workoutTrackingSchema = new Schema({
    email:{type:String,required:true,unique:true},
    weekWorkouts: { 
        monday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:String}
            }
        ],
        tuesday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:String}
            }
        ],
        wednesday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:String}
            }
        ],
        thursday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:String}
            }
        ],
        friday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:String}
            }
        ],
        saturday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:String}
            }
        ],
        sunday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:String}
            }
        ]
    }
});


const workout=model("workout",workoutTrackingSchema)
export {workout}
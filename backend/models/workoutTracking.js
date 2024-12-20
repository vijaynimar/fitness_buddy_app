import { Schema ,model} from "mongoose";

const workoutTrackingSchema = new Schema({
    email:{type:String,required:true,unique:true},
    weekWorkouts: { 
        monday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number, required: true}
            }
        ],
        tuesday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number, required: true}
            }
        ],
        wednesday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number, required: true}
            }
        ],
        thursday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number, required: true}
            }
        ],
        friday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number, required: true}
            }
        ],
        saturday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number, required: true}
            }
        ],
        sunday: [
            {
                preferredWorkout: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number, required: true}
            }
        ]
    }
});


const workout=model("workout",workoutTrackingSchema)
export {workout}
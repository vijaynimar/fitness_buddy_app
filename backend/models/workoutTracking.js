import { Schema ,model} from "mongoose";

const workoutTrackingSchema = new Schema({
    email:{type:String,required:true,unique:true},
    weekWorkouts: { 
        monday: [
            {
                workoutType: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number}
            }
        ],
        tuesday: [
            {
                workoutType: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number}
            }
        ],
        wednesday: [
            {
                workoutType: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number}
            }
        ],
        thursday: [
            {
                workoutType: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number}
            }
        ],
        friday: [
            {
                workoutType: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number}
            }
        ],
        saturday: [
            {
                workoutType: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number}
            }
        ],
        sunday: [
            {
                workoutType: { type: String, required: true },
                workoutDuration: { type: Number, required: true },
                caloriesBurn:{type:Number}
            }
        ]
    }
});


const workout=model("workout",workoutTrackingSchema)
export {workout}
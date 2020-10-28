const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  
  exercises: [ { type: {
        type: String,
        trim: true,
        required: "Enter type of workout"
      },
      name: {
        type: String,
        required: "Enter workout name"
      }, 
      duration: {
        type: Number,
        required: "Enter amount"
      },
      weight: {
        type: Number,
        required: "Enter amount"
      }, 
      reps: {
        type: Number,
        required: "Enter amount"
      },
      sets: {
        type: Number,
        required: "Enter amount"
      }, }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

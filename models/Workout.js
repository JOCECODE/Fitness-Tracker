const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
          type: {
            type: String
          },
          name: {
            type: String,
            trim: true
          },
          duration:  Number,
          weight: Number,
          reps: Number,
          sets: Number,
          distance: Number  
        }
      ]
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );
  
  workoutSchema.virtual("totalDuration").get(function () {
    let all = 0;
    for (let i = 0; i < this.exercises.length; i++){
      all = all + this.exercises[i].duration;
    }
    return all;
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;
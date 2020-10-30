var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
    type: {
        type: String
      },
      name: {
        type: String,
        trim: true  
      }, 
      duration: {
        type: Number
      },
      weight: {
        type: Number
      }, 
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
});

var Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

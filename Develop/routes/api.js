const router = require("express").Router();
const Workout = require("../models/Workout");

router.post("/api/workouts", (req, res) => {
    Workout.create(body).then(Workouts => {
        res.json(Workouts);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts", (req, res) => {
    Workout.find({}).sort({ date: -1 }).then(Workouts => {
        res.json(Workouts);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/:id", (req, res) => {
    Workout.findOne(
    {
        _id: mongojs.ObjectId(req.params.id)
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      });
});

router.get("/api/workouts", (req, res) => {
    Workout.find().then(Workouts => {
        res.json(Workouts); 
    }).catch(err => {
        res.status(400).json(err);
      });
});

router.get("/api/workouts/range", (req, res) => {
Workout.find({}).limit(7).then(Workouts => {
    console.log(Workouts)
    res.json(Workouts);
});
    });

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id).then(() => {
        res.json(true);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
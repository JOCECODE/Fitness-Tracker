const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => {
            res.json(data); 
        }).catch(err => {
            res.status(400).json(err);
          });
    });

    // app.put("/api/workouts/:id", )
//     app.post("/api/workouts", (req, res) => {
//     db.Workout.create().then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(400).json(err);
//     }); 
// });

// app.put("/api/workouts", (req, res) => {
//     db.Workout.find({}).sort({ date: -1 }).then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(400).json(err);
//     });
// });

// app.put("/api/workouts/:id", (req, res) => {
//     db.Workout.findOne(
//     {
//         _id: mongojs.ObjectId(req.params.id)
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       });
// });

app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    });
})

app.get("/api/workouts/range", (req, res) => {
db.Workout.find({}).limit(7).then(data => {
    console.log(data);
    res.json(data);
});
    });

app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }}).then((data) => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
};
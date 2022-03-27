const express = require("express");

const app = express();

app.use(express.json());


const userControllers= require("./controllers/users.controllers");
// const studentControllers= require("./controllers/students.controllers");
// const batchControllers= require("./controllers/batch.controllers");
// const evaluationControllers= require("./controllers/evaluation.controllers");
// const submissionControllers= require("./controllers/submission.controllers");

app.use("/users",userControllers);
// app.use("/students",studentControllers);
// app.use("/batches",batchControllers);
// app.use("/evaluations",evaluationControllers);
// app.use("/submissions",submissionControllers);


module.exports = app;
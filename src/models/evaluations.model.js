const mongoose = require("mongoose");

const evaluationSchema= new mongoose.Schema(
    {
       dateOfEvaluation:{ type: String,required:true},
       instructorId: {type: mongoose.Schema.Types.ObjectId, ref:"user"},
       batchId:{type: mongoose.Schema.Types.ObjectId, ref:"evaluation"},
       subId:{ type: mongoose.Schema.Types.ObjectId, ref: "submission"},
    },{
        timestamps:  {
            createdAt: true, updatedAt: true
        },
        versionKey: false
    }
)

module.exports = mongoose.model('evaluation', evaluationSchema);
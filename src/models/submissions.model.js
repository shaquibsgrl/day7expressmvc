const mongoose = require("mongoose");

const submissionSchema= new mongoose.Schema(
    {
        evaluationId:{type: mongoose.Schema.Types.ObjectId, ref:"evaluation"},
        studentId:[{type: mongoose.Schema.Types.ObjectId, ref:"user"}],
        marks:{ type: Number},

    },{
        timestamps:  {
            createdAt: true, updatedAt: true
        },
        versionKey:false
    }
)

module.exports = mongoose.model('submission', submissionSchema);
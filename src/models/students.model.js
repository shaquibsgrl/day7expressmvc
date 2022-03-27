const mongoose = require("mongoose");

const studentSchema= new mongoose.Schema(
    {
        rollId:{ type: Number,required:true},
        currentBatch: {type:String,required:true},
        batchId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"batch"
        }
    },{
        timestamps: {
            createdAt: true, updatedAt: true
        },
        versionKey: false 
    }
)

module.exports = mongoose.model('student', studentSchema);
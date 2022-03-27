const mongoose = require("mongoose");

const batchSchema= new mongoose.Schema(
    {
        batchName:{ type: String},
        userId:{type: mongoose.Schema.Types.ObjectId, ref:"user"}
    },{
        timestamps: true,
        versionKey: false
    },
)

module.exports = mongoose.model('batch', batchSchema);
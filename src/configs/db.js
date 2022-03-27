const mongoose = require("mongoose");

const connectdb = ()=>{
    return mongoose.connect("mongodb+srv://shaquib:12345@cluster0.i0acw.mongodb.net/relationship");

}
module.exports=connectdb;
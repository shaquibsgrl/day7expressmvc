const app = require("./index");
const connectdb = require("./configs/db");


app.listen("4000",async()=>{
    try{
        await connectdb();
        console.log("Listening on port no 4000");
    }
    catch(error){
        console.log("Something went wrong");
    }
});
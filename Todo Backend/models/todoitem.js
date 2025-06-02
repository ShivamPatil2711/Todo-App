const mongoose=require("mongoose");
const todoitemSchema=mongoose.Schema({// Structure of the Table BLUEPRINT OF THE TABLE
task:{type:String,required:true},
date:{type:Date,required:true},
completed:{type:Boolean,default:false},
Timestamp:{type:Date,default:Date.now}// This will automatically add the current date and time when a new item is created
});
module.exports=mongoose.model("TodoItem",todoitemSchema);// Classname Home , it acts as  CLASS 

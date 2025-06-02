//API'S
const TodoItem=require("../models/todoitem");
exports.createTodoItem=async (req,res,next)=>{
  console.log(req.body);
 const {task,date}=req.body;
 const todoItem=new TodoItem({task,date});
 await todoItem.save(); // Save the new todo item to the database
 res.status(201).json(todoItem);
}
exports.getTodoItems=(req,res,next)=>{
  TodoItem.find().then((a)=>{
    res.json(a);
  })
  .catch(()=>{
    console.log("Error in getting items");
  })
}
exports.deleteTodoItem=async(req,res,next)=>{
  const id=req.params.id;
  console.log(id);
 const Item= await TodoItem.deleteOne({_id:id});// findByIdAndDelete(id)
res.status(200).json(id);
}
exports.updateTodoItem=async(req,res,next)=>{
const id =req.params.id;
const Item=await TodoItem.updateOne({_id:id},{completed:true},{new:true});
 if (!Item) {
      return res.status(404).json({ message: "Item not found" });
    }
res.status(200).json(Item);
}
const express=require("express");
const path=require("path");
const mongoose=require("mongoose");
const errors=require("./controllers/errors");
const todoItemsRouter = require("./routes/todoitemsRouterjs");
const mongodbURL="mongodb://127.0.0.1:27017/TodoApp";
const cors=require("cors");
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use("/api/todo",todoItemsRouter);
app.use(errors.error404);
mongoose.connect(mongodbURL)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log("Server is running on port http://localhost:3000");
    });
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
import Appname from "./components/Appname";
import Additem  from "./components/additem";
import  "./App.css";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import Welcome from "./components/Welcomemsg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItemToServer, deleteItemFromServer, getItemsFromServer, markItemCompleted } from "./services/Itemservice";
import { useEffect } from "react";
function App() {
  const [Items,setItems]=useState([]);
useEffect(() => {// koi chiz ek hi barr run karni ho toh useEffect or change base
  const fetchInitialTasks = async () => {// getItemsFromServer().then(data=>{})
    const LoadInitialTasks = await getItemsFromServer();
    setItems(LoadInitialTasks);
  };
  fetchInitialTasks();
},[]);
const newItem=async(itemName,itemDate)=>{
  const serverItem=await addItemToServer(itemName,itemDate);
 console.log(serverItem); // task object
setItems((oldItems)=>{/// / method or directnew value can be pass
 let TodoItems=[...oldItems,serverItem]///// ... spread opreator  
  return TodoItems;
})
}
const deleteHandler=async(id)=>{
const deleteId= await deleteItemFromServer(id);// database se delete
setItems(oldItems=>oldItems.filter(item=> item.id!==id));// UI se delete
}
const updateHandler=async(id)=>{
 await markItemCompleted(id);
setItems(oldItems=>oldItems.map(item=> item.id === id ? { ...item, completed: true } : item));
const completedTask = Items.find(item => item.id === id);
  if (completedTask) {
    toast.success(`Task "${completedTask.todoname}" marked as completed!`, {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

}


  return <center className="todo-container">

    <Appname></Appname>
    <Welcome Items={Items} ></Welcome>
 <Additem todoInput={newItem}></Additem>
<Todoitems Items={Items} updateitem={updateHandler} deleteitem={deleteHandler}></Todoitems>
 <ToastContainer />
    </center>
}  

export default App;
//////////////////////////////Customized always starts with Capital letters
import Showitem from "./showitem"
const Todoitems=({Items,deleteitem,updateitem})=>{
 return( Items.map(Item=>{// react  me always map
    return <Showitem key={Item.id}  id={Item.id}  todoname={Item.todoname} tododate={Item.tododate} updateitem={updateitem} completed={Item.completed} deleteitem={deleteitem}></Showitem>
   }
     
   ))
}
export default Todoitems;
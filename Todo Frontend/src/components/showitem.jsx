import styles from './Todoitems.module.css'
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
function Showitem({todoname,tododate,deleteitem,id,updateitem,completed}){
    return<div className={`container ${completed ? styles.completedBox :""}`}>
  <div className="row kg-row ">
      <div className={`col-5 ${styles.Row}`}>
        {todoname}
   </div>
      <div className={`col-4 ${styles.Row}`}>
        {tododate}
   </div>
      <div className={`col-1 `}>
      <button type="button" className="btn btn-danger" onClick={(event)=>{
       deleteitem(id);
      }}><MdDelete className={styles.delete}></MdDelete></button>
      </div>
           <div className={`col-1 `}>
      <button type="button" className="btn btn-success" onClick={(event)=>{
         updateitem(id);
      }}><MdDone></MdDone></button>
      </div>
    </div>
    
  </div>
}
export default Showitem;
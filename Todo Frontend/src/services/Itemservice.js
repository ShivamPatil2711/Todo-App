 function formatDate(isoString) {
  if (!isoString) return "";
  return isoString.slice(0, 10);
}
 const mapServerItemToLocalItem=(serverItem)=>{
   return {
    id:serverItem._id,
  todoname:serverItem.task,
  tododate:formatDate(serverItem.date),
  completed:serverItem.completed,
  createdat:serverItem.Timestamp
  }
}
// ...existing code...
export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ task, date })
  });
  const data = await response.json(); // Await the JSON parsing
  return mapServerItemToLocalItem(data); // Now pass the parsed object | task object ko kiya map to local item
}
export const getItemsFromServer=async()=>{
  const res=  await fetch("http://localhost:3000/api/todo");
  const data=await res.json();
  return data.map(mapServerItemToLocalItem);
}
export const deleteItemFromServer=async(id)=>{
const res=await fetch(`http://localhost:3000/api/todo/delete/${id}`,{
  method:"DELETE"}
  );
  const Id=await res.json();
  return Id;

}
export const markItemCompleted=async(id)=>{
const res=await fetch(`http://localhost:3000/api/todo/update/${id}/completed`,{
  method:"PUT"
});
 const data=await res.json();
 console.log(data);
 return;
}


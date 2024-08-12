import { useDispatch,useSelector } from "react-redux";
import {useState} from "react";
import { addTask,deleteTask,CompleteTask,ReopenTask,EditDataSave } from "./todoSlice";
const App=()=>{
  const myTask=useSelector((state)=>state.todo.task);
  const dispatch=useDispatch();
  const [txtval,setTxtval]=useState("");
  const [btnWork,setBtnWork]=useState(true);
  const [editId,setEditId]=useState("");
  console.log(myTask);
  const addData=()=>{
    dispatch(addTask({"id":Date.now(),"work":txtval}))
  }
  const taskDelete=(id)=>{
dispatch(deleteTask({id:id}))
  }
  const taskComplete=(id)=>{
dispatch(CompleteTask({id:id}))
  }
  const taskReopen=(id)=>{
    dispatch(ReopenTask({id:id}))
  }
  const editTask=(id,work)=>{
    setEditId(id);
    setTxtval(work);
    setBtnWork(false);
  }
  const EditDataSave=()=>{
    setBtnWork(true)
    dispatch(EditDataSave({id:editId,work:txtval}))
setTxtval("");
  }
  let i=0;
  const ans=myTask.map((key)=>{
    i++;
    return(
      <>
      <tr>
        <td>{i} </td>
      
      <td>{key.status?key.work:<span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span>}</td>

      
      <td>
        <button onClick={()=>{taskDelete(key.id)}}>Delete</button>
      </td>
      <td>
        <button onClick={()=>{taskComplete(key.id)}}>Complete</button>
      </td>
      <td>
        <button onClick={()=>{taskReopen(key.id)}}>Reopen</button>
      </td>
      <td>
        <button onClick={()=>{editTask(key.id,key.work)}}>Edit Task</button>
      </td>
      </tr>
    </>
    )
  })

return(

  <>
  <center>
    <h1>Welcome to do list example</h1>
Enter your Task:<input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
<button onClick={addData}>Add task</button>
<hr/>
<table width="500" bgcolor="pink">
  <tr bgcolor="orange">
    <th>Sno.</th>
    <th>Your Task</th>
    <th>Delete</th>
    <th>Complete</th>
    <th>Reopen</th>
    <th>Edit Data</th>
  </tr>
  {ans}
</table>

  </center>
  
  </>
)
}
export default App;
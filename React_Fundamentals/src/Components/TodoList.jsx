import React, { useState } from 'react';

function TodoList(props) {
    const [todolist,setTodolist]=useState([])
    const [input,setInput]=useState("")

    const handleAdd=()=>{
        const newlist=
            {
                todo:input,
                status:false
            }
        
        setTodolist([...todolist,newlist])
        setInput("")
    }
   
    const handleDelete=(deleteindex)=>{
        const updatedlist=todolist.filter((td,index)=> index!==deleteindex)
        setTodolist(updatedlist)

    }

    const handleToggle=(toggleindex)=>{
        const modifiedlist=todolist.map((td,index)=>
          index===toggleindex?
          {...td,status:!td.status} : td
        )
        setTodolist(modifiedlist)
    }

    const totalcount=todolist.length
    const activecount=todolist.filter((td)=>td.status===false).length
    return (
        <div style={{border:"blue solid 2px"}}>
            <input type="text" placeholder='Enter the Todolist' value={input} onChange={(e)=>setInput(e.target.value)} /> &nbsp;
            <button onClick={handleAdd}>Add</button>
            
            {todolist.map((td,index)=> <ul><li key={index} >
                <span onClick={()=>handleToggle(index)} style={{textDecoration:td.status? "line-through":"none"}}>{td.todo}-{td.status?"Completed":"Active"}</span> &nbsp;
                <button onClick={()=>handleDelete(index)}>Delete</button></li></ul>
            
            )}
            <h5>Total Items in the list: {totalcount}</h5>
            <h5>Active Items in the list: {activecount}</h5>

            
        </div>
    );
}

export default TodoList;
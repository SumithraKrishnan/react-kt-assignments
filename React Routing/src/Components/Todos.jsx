import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Todos(props) {
    const [todos,setTodos]=useState([])

    // Fetching todos from the API using axios
    useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/todos")
     .then((response)=>setTodos(response.data))
    },[])

    // Function to add a new todo
    const AddTodo=()=>{
        axios.post("https://jsonplaceholder.typicode.com/todos",{
            "title":"Complete React Router",
            "userId":1,
            "completed":false
        })
        .then((response)=>{
            setTodos([...todos,response.data])
        })
    }
    // Function to update a todo's completion status
    const updateTodo=(id)=>{
        axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            "completed":true
        })
        .then((response)=>{
            setTodos(todos.map((todo)=>
            todo.id === id ? {...todo, ...response.data}:todo
            )
        )
        })
    }

    // Function to delete a todo
    const deleteTodo=(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response)=>{
            setTodos(todos.filter((todo)=>todo.id !== id))
        })
    }
    return (
        <div>
            {todos.map((todo)=>
            <li key={todo.id}>{todo.title}  ---  {todo.completed?"Completed":"Pending"}    <button onClick={()=>updateTodo(todo.id)}>Mark Complete</button> <button onClick={()=>deleteTodo(todo.id)}>Delete</button></li>
            )}
            <button onClick={AddTodo}>Add Todo</button>
        </div>
    );
}

export default Todos;
import React from 'react';
import { useLocalStorage } from './UseLocalStorage';
import { useState } from 'react';

function PersistedTodoList(props) {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [input, setInput] = useState('');


const addTodo = () => {
    const newTodo = {
        
        title: input,
        completed: false
    };
    setTodos([...todos, newTodo]);
    setInput('');
}

const todolist= todos.map((todo,index) => (
    <li key={index}>{todo.title}</li>
));

    return (
        <div>
            <h1>Persisted Todo List</h1>
            <input type="text" placeholder="Enter a new todo" value={input} onChange={(e) => setInput(e.target.value)}></input>

            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todolist}
            </ul>
        </div>
    );
}

export default PersistedTodoList;
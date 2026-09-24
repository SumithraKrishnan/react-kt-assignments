import { useReducer, useState } from 'react';

const initialState = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Do assignment', completed: true }
];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}

function Todolist_Reducer() {
  const [text, setText] = useState('');
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
        if (text.trim()) {
          dispatch({ type: 'ADD', payload: text });
          setText('');
        }
      }}>Add</button>

      {todos.map(todo => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
          />
          <span>{todo.text}</span>
          <button onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}>Delete</button>
        </div>
      ))}

      <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
        Clear Completed
      </button>
    </div>
  );
}

export default Todolist_Reducer;
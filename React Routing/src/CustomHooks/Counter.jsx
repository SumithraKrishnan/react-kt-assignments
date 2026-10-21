import React from 'react';
import { useLocalStorage } from './UseLocalStorage';

function Counter(props) {
    const [count, setCount] = useLocalStorage('count', 0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
import React from 'react';
import { useEffect, useRef, useState } from 'react';
function PreviousValue(props) {
    const [count, setCount] = React.useState(0);
    const previousCount=useRef();

    useEffect(() => {
        previousCount.current = count;
    }, [count]);

    return (
        <div>
            <h3>Previous Value using useRef</h3>
            <p>Current Value: {count}</p>
            <p>Previous Value: {previousCount.current}</p>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    );
}

export default PreviousValue;
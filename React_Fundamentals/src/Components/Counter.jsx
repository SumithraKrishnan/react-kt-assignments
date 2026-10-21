import React from 'react';
import { useState } from 'react';

function Counter(props) {
    const [counter,setCounter]=useState(0)
    const Incr=()=>{
        setCounter((prev)=>prev+1)
    }
    const Decr=()=>{
        if(counter>0){
        setCounter((prev)=>prev-1)
        }
    }
    const reset=()=>{
        setCounter(0)
    }
    return (
        <div style={{border:"blue solid 2px"}}>
            <h2>Counter</h2>
            <button onClick={Incr}>+</button>
            <span>{counter}</span>
            <button onClick={Decr}>-</button> <br/>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
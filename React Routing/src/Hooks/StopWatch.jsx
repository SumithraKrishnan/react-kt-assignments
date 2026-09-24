import React from 'react';
import { useState,useEffect } from 'react';

function StopWatch(props) {

    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(!isRunning) return;
        
        const timerId=setInterval(() => {
           setTimer((prevTimer) => prevTimer + 1);
        },1000);

        return()=>{
            clearInterval(timerId);
        };
    },[isRunning]);

    function reset(){
        setIsRunning(false)
        setTimer(0)
    }

    return (
        <div>
           <h3>Time: {timer} seconds</h3> 
           <button onClick={()=>setIsRunning(true)}>Start</button>
           <button onClick={()=>setIsRunning(false)}>Pause</button>
           <button onClick={reset}>Reset</button>
        </div>
    );
}

export default StopWatch;
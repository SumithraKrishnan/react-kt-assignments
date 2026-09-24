import React, { useEffect } from 'react';
import { useRef } from 'react';

function Timer(props) {

    const Timerref=useRef(null);

    function startTimer(){
        Timerref.current = setInterval(() => {
            console.log('Timer running...');
        }, 1000);
    }

    function stopTimer(){
        clearInterval(Timerref.current);
        console.log('Timer stopped.');
    }

    return (
        <div>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
}

export default Timer;
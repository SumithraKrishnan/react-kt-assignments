import React, { useRef } from 'react';
import { useEffect } from 'react';

function Auto_Focus(props) {
    const inputref=useRef(null);

    useEffect(()=>{
        inputref.current.focus();
    },[]);
    return (
        <div>
            <h2>Auto Focus Input</h2>
            <input ref={inputref} placeholder='Enter the name'></input>
        </div>
    );
}

export default Auto_Focus;
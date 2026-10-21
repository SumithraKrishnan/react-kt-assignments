import React, { useState } from 'react';

function Toggle(props) {
    const [visible,setVisible]=useState(true);
    const handlevisibility=()=>{
        setVisible(!visible)
    }
    return (
        <div style={{border:"red solid 2px"}}>
            <h2>Toggle</h2>
            {visible&&<p>Helloo Toggle Component</p>}
            <button onClick={handlevisibility}>{visible?"Hide":"Show"}</button>
            
        </div>
    );
}

export default Toggle;
import React from 'react';

function Button({label,variant,onClick}) {
    const savestyle= {
        color:"white",
        backgroundColor: "Blue",
        width:"100px"
   }
   const deletestyle= {
        color:"white",
        backgroundColor: "Red",
        width:"100px"
   }
    return (
        <div style={{border:"black solid 2px"}}>
            <button style={variant==="primary"? savestyle:deletestyle} onClick={onClick}>{label}</button>
        </div>
    );
}

export default Button;
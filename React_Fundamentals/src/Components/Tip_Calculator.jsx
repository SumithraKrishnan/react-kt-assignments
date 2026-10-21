import React, { useState } from 'react';

function Tip_Calculator(props) {
    const [amount,setAmount]=useState(0)
    const [tippercent,setTippercent]=useState(0)
   
    const tip=Number(Number(amount)*(Number(tippercent)/100))
    const totalamt=Number(Number(amount)+tip)
    
    return (
        <div style={{border:"black solid 2px"}}>
            <h2>Tip Calculator</h2>
            <input type='number' placeholder='Enter the amount' value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
            <input type='number' placeholder='Enter tip%' onChange={(e)=>setTippercent(e.target.value)}></input>
            <p>Total Amount: {totalamt} rs</p>
             <p>Tip: {tip} rs</p>

        </div>
    );
}

export default Tip_Calculator;
import React from 'react';
import { useState } from 'react';

function Login(props) {
    const [isLoggedin,setisLoggedin]=useState(true)
    return (
        <div style={{border:"red solid 2px"}}>
            <h2>Login Status</h2>
           <p> {isLoggedin? "Welcome user!" : "You have logged out, Thanks for Visiting!" } </p>
           <button onClick={()=>setisLoggedin(!isLoggedin)}>{isLoggedin? "Logout":"Login"}</button>
           
        </div>
    );
}

export default Login;
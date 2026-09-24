import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const navigate=useNavigate()
    const handleLogin=()=>{
        navigate("/home")
    }
    return (
        <div>
            <h3>Login Page</h3>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
import React from 'react';
import { useState,useEffect } from 'react';

function Auto_Fetch(props) {

    const [username, setUsername] =useState('');
    const [userData, setUserData] =useState(null);
    
    useEffect(() => {
    if(username===''){
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
    .then((response)=>response.json())
    .then((data)=>setUserData(data))
    .catch((error)=>console.log(error));
    }, [username]);

    return (
        <div>
            <br></br>
            <h2>GitHub User Search</h2>
            <input type="text" placeholder="Search username..." value={username} onChange={(e) => setUsername(e.target.value)} />
            {userData && (
                <div>
                    <h4>{userData.name}</h4>
                    <h4>Followers: {userData.followers}</h4>
                </div>
            )}
        </div>
    );
}

export default Auto_Fetch;
import React from 'react';

function UserCard({name,email_id,role}) {
    return (
        
        <div style={{
            border:"1px solid black",
            padding:"10px",
            margin:"10px",
            width:"250px",
            }}>
            
            <p>Name: {name}</p>
            <p>Email: {email_id}</p>
            <p>Role: {role}</p>
        </div>
       
    );
}

export default UserCard;
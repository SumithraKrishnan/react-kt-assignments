import React, { useEffect, useState } from 'react';

function FetchUsers(props) {
    const [users,setUsers]=useState([]) 
    const [err,setError]=useState(null)
    const [loading,setLoading]=useState(true)

    
    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((response)=>response.json())
     .then((data)=>{
        setUsers(data);
        setLoading(false);
     })
     .catch((err)=>{
        setError(err);
        setLoading(false);
    })
    },[])

  
  if(loading){
    return <div>Loading....</div>
  }

  if(err){
        return <div>{err.message}</div>
    }

    const userlist=users.map((user)=>
        <li key={user.id}>{user.name}-{user.email}-{user.address.city}</li>
    )
    return (
        <div>
            <ul>
                {userlist}
            </ul>
        </div>
    );
}

export default FetchUsers;
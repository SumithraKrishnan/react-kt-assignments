import React, { useEffect, useState } from 'react';
import axios from "axios";

function AxiosUsers(props) {
    const [users,setUsers]=useState([]) 
    const [err,setError]=useState(null)
    const [loading,setLoading]=useState(true)

    
    useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then((response)=>{
        setUsers(response.data);
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

    
    return (
        <div>
            
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                </thead>
                <tbody>
                    {users.map((user)=>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                    </tr>
                   )}
                </tbody>
            </table>
        </div>
    );
}

export default AxiosUsers;
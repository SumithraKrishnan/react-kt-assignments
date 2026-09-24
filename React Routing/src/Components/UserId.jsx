import React from 'react';
import { useParams } from 'react-router-dom';

function UserId(props) {
    const {id} = useParams()
    return (
        
        <div>
            <h3>User #{id}</h3>
        </div>
    );
}

export default UserId;
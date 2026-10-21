import React from 'react';

function Greetings(props) {
    return (
        <div>
            <h3>Hello, {props.name}!</h3>
        </div>
    );
}

export default Greetings;
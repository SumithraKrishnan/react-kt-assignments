import React, { useEffect, useState } from 'react';

function DocumentTitle(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);
    
    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>Click me</button>
            <p>You clicked {count} times</p>
        </div>
    );
}

export default DocumentTitle;

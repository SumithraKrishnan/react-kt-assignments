import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Search(props) {

    const [searchparams]=useSearchParams();
    const query=searchparams.get("q")
    return (
        <div>
            <h4>Search Component</h4>
            <p>Your searched result: {query}</p>
        </div>
    );
}

export default Search;
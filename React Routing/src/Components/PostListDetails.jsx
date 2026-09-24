import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostListDetails(props) {
    const {id}=useParams()

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data));
    }, [id]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((data) => setComments(data));
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {/* <h2>Post Details</h2>
            <p>Post Id: {id}</p> */}
            
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <h2>Comments</h2>

            {comments.map((comment) => (
                <div key={comment.id}>
                    <p><strong>{comment.name}</strong></p>
                    <p>{comment.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default PostListDetails;
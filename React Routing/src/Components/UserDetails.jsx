import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`),
        ])
            .then(async ([userResponse, postsResponse]) => {
                if (!userResponse.ok || !postsResponse.ok) {
                    throw new Error('Unable to load user details');
                }

                const [userData, postsData] = await Promise.all([
                    userResponse.json(),
                    postsResponse.json(),
                ]);

                setUser(userData);
                setPosts(postsData);
            })
            .catch((requestError) => setError(requestError.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <p>Loading user...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!user || !user.id) {
        return <p>User not found.</p>;
    }

    return (
        <div>
            <Link to="/users">Back to users</Link>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>

            <h3>Posts</h3>
            {posts.length === 0 ? (
                <p>This user has no posts.</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserDetails;

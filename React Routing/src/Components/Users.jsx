import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users(props) {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 400);

        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Unable to load users');
                }
                return response.json();
            })
            .then((data) => setUsers(data))
            .catch((requestError) => setError(requestError.message))
            .finally(() => setLoading(false));
    }, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Users</h2>
            <input
                type="search"
                placeholder="Search users"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            {filteredUsers.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul>
                    {filteredUsers.map((user) => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>
                                {user.name}
                            </Link>{' '}
                            - {user.email} - {user.address.city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Users;

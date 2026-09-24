import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostLists(props) {
    const [posts,setPosts]=useState([])
    const [error,setError]=useState(null)
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);


    //Pagination logic to load posts in chunks of 10
    const loadPosts = () => {
         setLoading(true);

  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    .then((response) => response.json())
    .then((data) => {
      setPosts((previousPosts) => [...previousPosts, ...data]);
      setHasMore(data.length === 10);
      setPage((previousPage) => previousPage + 1);
    })
    .catch(() => setError("Unable to load posts"))
    .finally(() => setLoading(false));
};
    // useEffect(()=>{
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response)=>response.json())
    //   .then((data)=>setPosts(data))
    //   .catch((err)=>setError(err))
    // },[])

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            {posts.map((post)=>
            <div key={post.id}>
               <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                </Link>
            </div>
               )}
            <button onClick={loadPosts} disabled={loading || !hasMore}>
            {loading ? "Loading..." : hasMore ? "Load more" : "No more posts"}</button>
        </div>
    );
}

export default PostLists;
import { useEffect, useState } from "react"
import "./App.css"

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function renderPosts() {
    return posts.map((post) => (
      <div key={post._id}>
        <a href={`/post/${post._id}`}>{post.title} by {post.user.username}</a>
      </div>
    ));
  }

  return (
    <>
      <h1> Posts </h1>
      {renderPosts()}
    </>
  )
}

export default App

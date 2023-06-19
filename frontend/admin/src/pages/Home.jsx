import { useEffect, useState } from "react"
import Nav from "../components/Nav"

function Home() {

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
        <div className="flex justify-between" key={post._id}>
          <a className="flex gap-3 items-center" href={`/post/${post._id}`}> <em className="font-bold hover:text-blue-700 transition"> {post.title} </em> by {post.user.username}</a>
          <div className="flex gap-3">
            <button className="py-1 px-3 bg-blue-500 hover:bg-blue-400 transition text-white font-bold border rounded-md">Edit</button>
            <button className="py-1 px-3 bg-red-500 hover:bg-red-400 transition text-white font-bold border rounded-md">Delete</button>
          </div>
        </div>
      ));
    }

  return (
    <>
      <Nav />
      <div className="p-5">
        <div className="p-5 border-2 border-blue-300 rounded-xl">
          <h1 className="text-3xl text-blue-500 mb-3"> Posts </h1>
          <div className="flex flex-col">
            {renderPosts()} 
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
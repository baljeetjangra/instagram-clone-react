import React, { useEffect, useState } from "react";
import "./App.css";
import instagram from "./assets/instagram.png";
import Post from "./components/Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={instagram} alt="" />
      </div>
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;

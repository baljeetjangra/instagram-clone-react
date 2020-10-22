import React, { useEffect, useState } from "react";
import "./App.css";
import instagram from "./assets/instagram.png";
import Post from "./components/Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.doc.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={instagram} alt="" />
      </div>
      <Post username="" caption="" imageUrl="" />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;

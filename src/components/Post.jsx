import { Avatar } from "@material-ui/core";
import React from "react";
import "../assets/css/post.css";
import instagram from "../assets/instagram.png";

const Post = ({ username, imageUrl, caption }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="b" src={instagram} />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}{" "}
      </h4>
    </div>
  );
};

export default Post;

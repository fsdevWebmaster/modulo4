
import { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

import { IPost } from "../interfaces/IPost"
import { updateLikes } from "../services/mainService";

export const Post = ({id, image, createdAt, likes, author, text, comments}: IPost) => {
  const [postLikes, setPostLikes] = useState(likes)

  const handleLikes = (postId:string) => {
    setPostLikes(postLikes + 1);
    const token = localStorage.getItem("token");
    if (token) {
      updateLikes(token, id)
        .then((result) => {
          
          console.log(result);

        }).catch((err) => {
          console.log("Error updating likes:", err);
        });
    }
  }

  return (
    <div className="post-container mb-3">
      <img src={ image } alt="post" className="img-fluid mb-2" />
      <div className="post-content px-4">
        <div className="content-row py-2">
          <span className="created">{ createdAt }</span>
          <span onClick={ () => handleLikes(id) } className="likes bg-danger text-white px-3 py-2">
            <AiOutlineHeart className="me-1" />
            { postLikes }
          </span>
        </div>
        <p className="py-1"><strong>{ author.username }</strong></p>
        <p>{ text }</p>
        <div className="content-row comments">
          <BiComment />
          <span className="py-3 ms-1">{ comments.length }</span>
        </div>
      </div>
    </div>
  )
}

import { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

import { IPost } from "../interfaces/IPost"

export const Post = ({imgPath, createdAt, likes, owner, text, comments}: IPost) => {
  const [postLikes, setPostLikes] = useState(likes);

  const handleLikes = () => {
    setPostLikes(postLikes + 1);
  }

  return (
    <div className="post-container mb-3">
      <img src={ imgPath } alt="post" className="img-fluid mb-2" />
      <div className="post-content px-4">
        <div className="content-row py-2">
          <span className="created">{ createdAt }</span>
          <span onClick={ handleLikes } className="likes bg-danger text-white px-3 py-2">
            <AiOutlineHeart className="me-1" />
            { postLikes }
          </span>
        </div>
        <p className="py-1"><strong>{ owner }</strong></p>
        <p>{ text }</p>
        <div className="content-row comments">
          <BiComment />
          <span className="py-3 ms-1">{ comments }</span>
        </div>
      </div>
    </div>
  )
}
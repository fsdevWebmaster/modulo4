import { dummiePosts } from "../dummieData/database/posts";
import { IPost } from "../interfaces/IPost";
import { Post } from "./post";

export const PostsList = () => {
  const posts:IPost[] = dummiePosts;

  return (
    <>
      { posts.map( (post, i) => (
        <Post
          key={ i } 
          imgPath={ post.imgPath }
          createdAt={ post.createdAt }
          likes={ post.likes }
          owner={ post.owner }
          text={ post.text }
          comments={ post.comments }
        />
      ))}
    </>
  )
}
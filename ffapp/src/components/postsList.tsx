import { dummiePosts } from "../dummieData/database/posts";
import { IPost } from "../interfaces/IPost";
import { Post } from "./post";

interface Props {
  posts: IPost[]
}

export const PostsList = ({ posts }:Props) => {

  // console.log("posts:", posts);

  return (
    <>
      { posts.map((post:IPost) => (
        <Post
          key={post.id}
          id={post.id}
          image={post.image}
          createdAt={post.createdAt}
          likes={post.likes}
          author={post.author}
          text={post.text}
          comments={post.comments} 
          updatedAt={post.updatedAt}
        />
      ))}
    </>
  )
}
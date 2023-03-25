import { IPost } from "../interfaces/IPost";
import { Post } from "./post";

interface Props {
  posts: IPost[];
}

export const PostsList = ({ posts }: Props) => {
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
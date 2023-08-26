import { Link, useLoaderData } from 'react-router-dom'
import { getPost } from '../api/posts'
import { getComments } from '../api/comments'
import { getUser } from '../api/users'
import CommentCard from '../Components/CommentCard'

async function loader({ params: { postId }, request: { signal } }) {
  const post = await getPost(postId, { signal })
  const comments = getComments(postId, { signal })
  const user = getUser(post.userId, { signal })

  return { post, comments: await comments, user: await user }
}

const Post = () => {
  const { post, user, comments } = useLoaderData()

  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${user.id}`}>{user.name}</Link>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => {
          return (
            <CommentCard
              email={comment.email}
              body={comment.body}
              key={comment.id}
            />
          )
        })}
      </div>
    </>
  )
}

export const postRoute = {
  loader,
  element: <Post />,
}

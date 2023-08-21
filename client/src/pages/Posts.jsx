import { useLoaderData } from 'react-router-dom'
import PostCard from '../Components/PostCard'
import { getPosts } from '../api/posts'

function loader({ request: { signal } }) {
  return getPosts({ signal })
}

function Posts() {
  const posts = useLoaderData()

  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => {
          return (
            <PostCard
              title={post.title}
              body={post.body}
              postId={post.id}
              key={post.id}
            />
          )
        })}
      </div>
    </>
  )
}

export const postsRoute = {
  loader,
  element: <Posts />,
}

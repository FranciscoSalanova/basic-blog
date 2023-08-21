import { useLoaderData, useNavigation } from 'react-router-dom'
import PostCard from '../Components/PostCard'
import Spinner from '../Components/Spinner'
import { getPosts } from '../api/posts'

function loader({ request: { signal } }) {
  return getPosts({ signal })
}

function Posts() {
  const posts = useLoaderData()
  const { state } = useNavigation()

  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {state === 'loading' ? (
          <Spinner />
        ) : (
          posts.map((post) => {
            return (
              <PostCard
                title={post.title}
                body={post.body}
                postId={post.id}
                key={post.id}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export const postsRoute = {
  loader,
  element: <Posts />,
}

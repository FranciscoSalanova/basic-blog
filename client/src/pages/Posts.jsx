import { useLoaderData, useNavigation } from 'react-router-dom'
import PostCard from '../Components/PostCard'

const Posts = () => {
  const posts = useLoaderData()
  const { state } = useNavigation()

  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {state === 'loading' ? (
          <h1>Loading...</h1>
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

export default Posts

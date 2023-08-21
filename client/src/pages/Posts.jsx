import { useLoaderData, useNavigation } from 'react-router-dom'
import PostCard from '../Components/PostCard'
import Spinner from '../Components/Spinner'

const Posts = () => {
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

export default Posts

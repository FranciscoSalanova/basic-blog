import { Link } from 'react-router-dom'

const PostCard = ({ title, body, postId }) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link to={`/posts/${postId}`} className="btn">
          View
        </Link>
      </div>
    </div>
  )
}

export default PostCard

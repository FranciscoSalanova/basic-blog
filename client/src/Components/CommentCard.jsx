const CommentCard = ({ email, body }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="text-sm mb-1">{email}</div>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default CommentCard

import { Link } from 'react-router-dom'

const UserCard = ({ name, email, website, company, userId }) => {
  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div className="card-preview-text">
          {company}
          <br />
          {website}
          <br />
          {email}
        </div>
      </div>
      <div className="card-footer">
        <Link to={`/users/${userId}`} className="btn">
          View
        </Link>
      </div>
    </div>
  )
}

export default UserCard

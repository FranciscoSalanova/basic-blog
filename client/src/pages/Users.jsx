import { useLoaderData, useNavigation } from 'react-router-dom'
import UserCard from '../Components/UserCard'

const Users = () => {
  const users = useLoaderData()
  const { state } = useNavigation()

  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {state === 'loading' ? (
          <h1>Loading...</h1>
        ) : (
          users.map((user) => {
            return (
              <UserCard
                name={user.name}
                email={user.email}
                website={user.website}
                company={user.company.name}
                userId={user.id}
                key={user.id}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default Users

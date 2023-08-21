import { useLoaderData, useNavigation } from 'react-router-dom'
import UserCard from '../Components/UserCard'
import Spinner from '../Components/Spinner'

const Users = () => {
  const users = useLoaderData()
  const { state } = useNavigation()

  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {state === 'loading' ? (
          <Spinner />
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

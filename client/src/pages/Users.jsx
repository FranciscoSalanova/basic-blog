import { useLoaderData, useNavigation } from 'react-router-dom'
import UserCard from '../Components/UserCard'
import Spinner from '../Components/Spinner'
import { getUsers } from '../api/users'

function loader({ request: { signal } }) {
  return getUsers({ signal })
}

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

export const usersRoute = {
  loader,
  element: <Users />,
}

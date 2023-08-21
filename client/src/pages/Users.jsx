import { useLoaderData } from 'react-router-dom'
import UserCard from '../Components/UserCard'
import { getUsers } from '../api/users'

function loader({ request: { signal } }) {
  return getUsers({ signal })
}

const Users = () => {
  const users = useLoaderData()

  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => {
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
        })}
      </div>
    </>
  )
}

export const usersRoute = {
  loader,
  element: <Users />,
}

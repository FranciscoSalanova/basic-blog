import { useLoaderData, useNavigation } from 'react-router-dom'
import Spinner from '../Components/Spinner'

const Todos = () => {
  const todos = useLoaderData()
  const { state } = useNavigation()

  return (
    <>
      <div className="container">
        <h1 className="page-title">Todos</h1>
        <ul>
          {state === 'loading' ? (
            <Spinner />
          ) : (
            todos.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className={todo.completed ? 'strike-through' : null}
                >
                  {todo.title}
                </li>
              )
            })
          )}
        </ul>
      </div>
    </>
  )
}

export default Todos

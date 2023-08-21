import { useLoaderData } from 'react-router-dom'
import { getTodos } from '../api/todos'

function loader({ request: { signal } }) {
  return getTodos({ signal })
}

const Todos = () => {
  const todos = useLoaderData()

  return (
    <>
      <>
        <h1 className="page-title">Todos</h1>
        <ul>
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className={todo.completed ? 'strike-through' : null}
              >
                {todo.title}
              </li>
            )
          })}
        </ul>
      </>
    </>
  )
}

export const todosRoute = {
  loader,
  element: <Todos />,
}

import { createBrowserRouter, redirect } from 'react-router-dom'
import NavLayout from './Components/NavLayout.jsx'
import { postListRoute } from './pages/Posts.jsx'
import Users from './pages/Users.jsx'
import Todos from './pages/Todos.jsx'
import Home from './pages/Home.jsx'
import { postRoute } from './pages/Post.jsx'
import User from './pages/User.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'posts',
        children: [
          {
            index: true,
            ...postListRoute,
          },
          {
            path: ':postId',
            ...postRoute,
          },
        ],
      },
      {
        path: 'users',
        children: [
          {
            index: true,
            element: <Users />,
            loader: ({ request: { signal } }) => {
              return fetch('http://localhost:3000/users', { signal })
            },
          },
          {
            path: ':userId',
            element: <User />,
            loader: ({ params, request: { signal } }) => {
              return fetch(`http://localhost:3000/users/${params.userId}`, {
                signal,
              }).then((res) => {
                if (res.status === 200) return res.json()
                throw redirect('/users')
              })
            },
          },
        ],
      },
      {
        path: 'todos',
        children: [
          {
            index: true,
            element: <Todos />,
            loader: ({ request: { signal } }) => {
              return fetch('http://localhost:3000/todos', { signal })
            },
          },
        ],
      },
    ],
  },
])

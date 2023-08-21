import { createBrowserRouter, redirect } from 'react-router-dom'
import NavLayout from './Components/NavLayout.jsx'
import { pages } from './pages/index.js'

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: '/', element: <pages.Home /> },
      {
        path: '/posts',
        children: [
          {
            index: true,
            element: <pages.Posts />,
            loader: ({ request: { signal } }) => {
              return fetch('http://localhost:3000/posts', { signal })
            },
          },
          {
            path: ':postId',
            element: <pages.Post />,
            loader: ({ params, request: { signal } }) => {
              return fetch(`http://localhost:3000/posts/${params.postId}`, {
                signal,
              }).then((res) => {
                if (res.status === 200) return res.json()
                throw redirect('/posts')
              })
            },
          },
        ],
      },
      {
        path: '/users',
        children: [
          {
            index: true,
            element: <pages.Users />,
            loader: ({ request: { signal } }) => {
              return fetch('http://localhost:3000/users', { signal })
            },
          },
          {
            path: ':userId',
            element: <pages.User />,
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
      { path: '/todos', element: <pages.Todos /> },
    ],
  },
])

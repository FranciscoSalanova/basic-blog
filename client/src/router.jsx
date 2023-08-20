import { createBrowserRouter, redirect } from 'react-router-dom'
import Posts from './pages/Posts.jsx'
import Users from './pages/Users.jsx'
import Todos from './pages/Todos.jsx'
import Home from './pages/Home.jsx'
import NavLayout from './Components/NavLayout.jsx'
import Post from './pages/Post.jsx'

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/posts',
        children: [
          {
            index: true,
            element: <Posts />,
            loader: ({ request: { signal } }) => {
              return fetch('http://localhost:3000/posts', { signal })
            },
          },
          {
            path: ':postId',
            element: <Post />,
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
      { path: '/users', element: <Users /> },
      { path: '/todos', element: <Todos /> },
    ],
  },
])

import { createBrowserRouter } from 'react-router-dom'
import NavLayout from './Components/NavLayout.jsx'
import Home from './pages/Home.jsx'
import { postsRoute } from './pages/Posts.jsx'
import { postRoute } from './pages/Post.jsx'
import { usersRoute } from './pages/Users.jsx'
import { userRoute } from './pages/User.jsx'
import { todosRoute } from './pages/Todos.jsx'

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
            ...postsRoute,
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
            ...usersRoute,
          },
          {
            path: ':userId',
            ...userRoute,
          },
        ],
      },
      {
        path: 'todos',
        children: [
          {
            index: true,
            ...todosRoute,
          },
        ],
      },
    ],
  },
])

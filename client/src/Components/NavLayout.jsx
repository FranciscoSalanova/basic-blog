import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar.jsx'

const NavLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

export default NavLayout

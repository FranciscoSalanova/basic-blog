import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default NavLayout

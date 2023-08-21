import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Spinner from './Spinner.jsx'

const NavLayout = () => {
  const { state } = useNavigation()
  const isLoading = state === 'loading'

  return (
    <>
      <Navbar />
      <ScrollRestoration />
      {isLoading && <Spinner />}
      <div className={`container ${isLoading ? 'loading' : null}`}>
        <Outlet />
      </div>
    </>
  )
}

export default NavLayout

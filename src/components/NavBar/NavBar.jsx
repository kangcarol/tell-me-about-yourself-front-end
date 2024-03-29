import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../assets/branding/logo.svg'

const NavBar = ({ user, handleLogout }) => {

  const location = useLocation()

  const publicLinks = (
    <ul>
      <li><Link to="/signup">SIGN UP</Link></li>
      <li><Link to="/login">LOG IN</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      {/* <li><Link to={`/profiles/${user?.profile}`}>Welcome, {user ? user.name.toUpperCase() : 'Friend'}</Link></li> */}
      <li><Link to="/cards/new">CREATE A CARD</Link></li>
      <li><Link to="/cards">ALL CARDS</Link></li>
      <li><Link to="/profiles">CONTRIBUTORS</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <li><Link to="/" onClick={handleLogout}>LOG OUT</Link></li>
    </ul>
  )

  return (
  
    <header className={styles.container}>
      {(location.pathname !==  '/' || location.pathname ===  '/login' || location.pathname ===  '/signup') ||(location.pathname ===  '/' && (user)) ? <Link to="/"><img src={Logo} alt="logo"/></Link> : null}
      <nav>

        
        {user ? protectedLinks : publicLinks}
      </nav>
    </header>
  
  )
}

export default NavBar
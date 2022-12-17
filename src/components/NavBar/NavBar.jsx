import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../assets/branding/logo.svg' //! create logo

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><Link to="/login">LOG IN</Link></li>
      <li><Link to="/signup">SIGN UP</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><Link to={`/profiles/${user?.profile}`}>Welcome, {user ? user.name.toUpperCase() : 'Friend'}</Link></li>
      <li><Link to="/cards">CATEGORIES</Link></li>
      <li><Link to="/cards/new">NEW CARD</Link></li>
      <li><Link to="/profiles">PROFILES</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <li><Link to="/logout" onClick={handleLogout}>LOG OUT</Link></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <Link to={'/'}><img src={Logo} alt="logo" /></Link>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
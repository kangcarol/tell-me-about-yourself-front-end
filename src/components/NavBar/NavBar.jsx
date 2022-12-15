import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../assets/branding/logo.svg' //! create logo

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><Link to="/login">LOG IN</Link></li>
      <li><Link to="/signup">SIGN UP</Link></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><Link to="/cards/new">NEW CARD</Link></li>
      <li><Link to="/cards">ALL CARDS</Link></li>
      <li><Link to="/profiles">GET TO KNOW SOMEONE</Link></li>
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
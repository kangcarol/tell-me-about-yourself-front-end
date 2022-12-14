import styles from './Landing.module.css'
import Logo from '../../assets/branding/logo.svg'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'Friend'}</h1>
      <img src={Logo} alt="logo" />

      {/* {user ?  ''
      :
        <>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      } */}

    </main>
  )
}

export default Landing

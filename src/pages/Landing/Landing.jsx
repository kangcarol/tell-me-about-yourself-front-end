import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'friend'}</h1>
      <h1>"Tell me about yourself"</h1>
    </main>
  )
}

export default Landing

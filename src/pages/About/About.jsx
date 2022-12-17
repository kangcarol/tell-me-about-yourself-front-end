import styles from './About.module.css'
// import Logo from '../../assets/branding/logo.svg' //! create logo

const About = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'friend'}</h1>
      {/* <h1>"Tell me about yourself"</h1> */}
      <h4>TELL ME ABOUT YOURSELF is a flashcard app to help software engineers prep for interviews, both behavioral and technical.</h4>

    </main>
  )
}

export default About
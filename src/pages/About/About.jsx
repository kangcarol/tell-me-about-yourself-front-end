import styles from './About.module.css'
// import Logo from '../../assets/branding/logo.svg' //! create logo

const About = ({ user }) => {
  return (
    <main className={styles.container}>

      <h4><span>TELL ME ABOUT YOURSELF</span> is a flashcard app to help software engineers prep for interviews, both behavioral and technical.</h4>

    </main>
  )
}

export default About
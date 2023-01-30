import styles from './Landing.module.css'
import { useState } from "react"
import Logo from '../../assets/branding/logo.svg'

const Landing = ({ user, cards }) => {

  // const categoryArr = ['Behavioral', 'Frontend', 'Backend', 'CS','Other']
  const [randomNumber, setRandomNumber] = useState(0)

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * cards.length)
    setRandomNumber(randomNumber)
  }
  console.log("RANDOM NUMBER", randomNumber)
  console.log("CARDS LENGTH", cards.length)

  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'Friend'}</h1>
      <section>
        <details>
            <summary onClick={generateRandomNumber}>
              <h1>Pick a Card</h1>
            </summary>
            {/* {cards[randomNumber].text} */}
        </details>
      </section>
    </main>
  )
}

export default Landing

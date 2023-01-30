import styles from './Landing.module.css'
import { useState } from "react"
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/branding/logo.svg'

const Landing = ({ user, cards }) => {

  // const categoryArr = ['Behavioral', 'Frontend', 'Backend', 'CS','Other']
  const [randomNumber, setRandomNumber] = useState(0)

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * cards.length)
    setRandomNumber(randomNumber)
  }
  console.log("RANDOM NUMBER", randomNumber)
  console.log("RANDOM CARD ID", cards[randomNumber])

  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'Friend'}</h1>
      <section>
        <button onClick={generateRandomNumber}>Pick a Card</button>
        <Link to={`/cards/${cards[randomNumber]._id}`}>{cards[randomNumber] && cards[randomNumber].text}</Link>
      </section>
    </main>
  )
}

export default Landing

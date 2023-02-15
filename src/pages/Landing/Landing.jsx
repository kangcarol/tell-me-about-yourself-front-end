import styles from './Landing.module.css'
import { useState } from "react"
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/branding/logo.svg'
import Card from '../../components/Card/Card'

const Landing = ({ user, cards }) => {

  // const categoryArr = ['Behavioral', 'Frontend', 'Backend', 'CS','Other']
  const [randomNumber, setRandomNumber] = useState(0)

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * cards.length)
    setRandomNumber(randomNumber)
  }
  console.log("RANDOM NUMBER", randomNumber)
  console.log("RANDOM CARD", cards[randomNumber])

  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'Friend'}</h1>
      <section>

      {cards.filter(card => card._id === cards[randomNumber]._id).map((card) => (<Card card={card} 
          key={card._id} /> ))}

      {/* {cards.map((card) => (
        (card.id === cards[randomNumber].id) ?
          <Card card={card} 
          key={card._id} />
          :
          null
        ))} */}
        <button onClick={generateRandomNumber}>Pick a Card</button>
      </section>
    </main>
  )
}

export default Landing


// to={`/cards/${cards[randomNumber]._id}`} // this is the line that is causing the error

// {(cards.filter(card => card.id === cards[randomNumber].id)).map((card) => (
//   <Card card={card}
//     key={card._id} /> ))}

//   {cards.filter(card => card.id === cards[randomNumber].id).map((card) => (

//       <Card card={card} 
//       key={card._id} />

//     ))}

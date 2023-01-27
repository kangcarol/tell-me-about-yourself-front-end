import styles from './CardsRandom.module.css'
import Card from '../../components/Card/Card'
import Icon from '../../components/Icon/Icon.jsx'
import { useState } from "react"


const CardsRandom = (props) => {
  console.log("cardlist props:" , props)

  const categoryArr = ['Behavioral', 'Frontend', 'Backend', 'CS','Other']
  const [randomNumber, setRandomNumber] = useState(0)
  
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * props.cards.length)
    setRandomNumber(randomNumber)
  }
  console.log("RANDOM NUMBER", randomNumber)


  return (
    <main className={styles.container}>

      <section>
        <details>
            <summary onClick={generateRandomNumber}>
              <h1>Pick a Card</h1>
            </summary>
            {props.cards[randomNumber].text }
        </details>
      </section>

      {/* {categoryArr.map((c, idx) =>
        <section key={idx}>
          <details>
            <summary onClick={generateRandomNumber}>
              <Icon category={c}/>
              <h1>{c.toUpperCase()}</h1>
            </summary>
            {(props.cards.length > 0)  ?
              props.cards.map((card) => (
                (card.category === c) && card === props.cards[randomNumber] ?
                <Card card={card} 
                key={card._id} />
                :
                ''
              ))
              :
            <p>No cards in this category</p>
          }
          </details>
        </section>
      )}  */}
    
    </main>
  )
}

export default CardsRandom



import styles from './CardsRandom.module.css'
import Card from '../../components/Card/Card'
import Icon from '../../components/Icon/Icon.jsx'

const CardsRandom = (props) => {
  console.log("cardlist props:" , props)

  const categoryArr = ['Behavioral', 'Frontend', 'Backend','Javascript', 'Python', 'CS','Other']

  // const cardsOfCategory = props.cards.filter(card => card.category === categoryArr[0])

// return random card of that category
// cards of that category[Math.floor(Math.random() * cards of that category length)]

//to get cards of that category >>>> cards.count(card => card.category === c)

  return (
    <main className={styles.container}>

      {categoryArr.map((c, idx) =>
        <section key={idx}>
          <details>
            <summary>
              <Icon category={c}/>
              <h1>{c.toUpperCase()}</h1>
            </summary>
            {props.cards.map((card) => (
              (card.category === c) ?
              <Card card={card} handleAddFavorites={props.handleAddFavorites} handleRemoveFavorites={props.handleRemoveFavorites}key={card._id} />
              :
              ''
            ))}


          </details>
        </section>
      )} 
    
    </main>
  )
}

export default CardsRandom



import styles from './CardList.module.css'
import Card from '../../components/Card/Card'
import Icon from '../../components/Icon/Icon.jsx'

const CardList = (props) => {
  console.log("cardlist props:" , props)

  const categoryArr = ['Behavioral',   'Frontend', 'Backend','Javascript', 'Python', 'CS','Other']

  return (
    <main className={styles.container}>

      {categoryArr.map((c, idx) =>
        <section key={idx}>
          <details>
            <summary>
              <Icon category={c}/>
              <h1>{c.toUpperCase()}</h1>
            </summary>
            {props.card.map((card) => (
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

export default CardList



import styles from './CardList.module.css'
import Card from '../../components/Card/Card'
import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon.jsx'

const CardList = (props) => {
  console.log("cardlist props:" , typeof props) //! get category

  const categoryArr = ['Behavioral', 'CS', 'Javascript', 'Frontend', 'React', 'Styling', 'Python', 'Databases', 'Backend', 'Other']

  return (
    <main className={styles.container}>

      {categoryArr.map((c, idx) =>
        <section key={idx}>
          <details>
            <summary>
              <Icon category={c}/>
              <h1>{c.toUpperCase()}</h1></summary>
            {props.card.map((card) => (
              (card.category === c) ?
              <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
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



import styles from './CardOfCategory.module.css'
import Card from '../../components/Card/Card'
import { useParams, Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon.jsx'

const CardOfCategory = (props) => {
  const { category, id } = useParams()
  console.log("category params" , category[0].toUpperCase() + category.slice(1))

  return (
    <main className={styles.container}>
      <section>
        <div>
          <Icon category={category} />
          <h1>{category.toUpperCase()}</h1>
        </div>
        {props.card.map((card, idx) => (
          (card.category[0].toUpperCase() + category.slice(1) === category[0].toUpperCase() + category.slice(1)) ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
    </main>
  )
}

export default CardOfCategory



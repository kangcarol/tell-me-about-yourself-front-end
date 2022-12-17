import styles from './CardOfCategory.module.css'
import Card from '../../components/Card/Card'
import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon.jsx'

const CardOfCategory = (props) => {
  console.log("cardlist props:" , props)
  // const categoryName = 'Behavioral'

  return (
    <main className={styles.container}>
      <section>
        <div>
          <Icon category={'Behavioral'} />
          <h1>BEHAVIORAL</h1>
        </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'Behavioral') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
    </main>
  )
}

export default CardOfCategory



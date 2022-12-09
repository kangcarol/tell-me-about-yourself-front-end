import styles from './CardList.module.css'
import Card from '../../components/Card/Card'

const CardList = (props) => {
  console.log("cardlist props:" , props)
  return (
    <main className={styles.container}>
      {props.card.map(card => (
        <Card card={card} key={card._id} />
      ))}
    </main>
  )
}
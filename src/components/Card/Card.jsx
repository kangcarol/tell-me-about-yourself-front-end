import { Link } from 'react-router-dom'
import styles from './Card.module.css'

// Components
import Icon from "../Icon/Icon"
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const Card = ({card}) => {
  return (
    <>
      <Icon category={card.category} />
      <Link to={`/cards/${card._id}`}>
        <article className={styles.container}>
          
          <h6>{card.text}</h6>
          {/* <p>{card.answer}</p> */}
          {/* <AuthorInfo content={card} /> */}
        </article>
      </Link>
    </>
  )
}

export default Card
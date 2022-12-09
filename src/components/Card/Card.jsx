import { Link } from 'react-router-dom'
import styles from './Card.module.css'

// Components
import Icon from "../Icon/Icon"
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const Card = ({card}) => {
  return (
    <Link to={`/cards/${card._id}`}>
      <article className={styles.container}>
        
        <Icon category={card.category} />
        <h6>{card.text}</h6>
        
        <AuthorInfo content={card} />
      </article>
    </Link>
  )
}

export default Card
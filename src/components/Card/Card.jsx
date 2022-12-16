import { Link, useLocation } from 'react-router-dom'
import styles from './Card.module.css'

// Components
import Icon from "../Icon/Icon"
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const Card = (props) => {
  const location = useLocation()
  return (
    <>
      <Icon category={props.card.category} />
      <Link to={`/cards/${props.card._id}`}>
        <article className={styles.container}>
          
          <h6>{props.card.text}</h6>

          {(location.pathname ==='/birds') || (location.pathname !=='/cards' && props.favorites===false) ?

          <button className="btn btn-secondary" onClick={() => props.handleAddFavorites(props.card)}>Add to Favorites</button>
          :
          ''
          }

        </article>
      </Link>
    </>
  )
}

export default Card
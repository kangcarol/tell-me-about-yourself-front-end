import { Link, useLocation } from 'react-router-dom'
import styles from './Card.module.css'

// Components
import Icon from "../Icon/Icon.jsx"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const Card = (props) => {
  const location = useLocation()
  console.log ("propsssss fav", typeof props.favorite)
  
  return (
    <>
        <article className={styles.container}>
          
          {(location.pathname ==='/cards/behavioral') || (location.pathname ==='/cards/behavioral' && props.favorites===false) ?

          <button className="btn" onClick={() => props.handleAddFavorites(props.card)}><Icon category={'BookmarkAdd'} />ADD BKMK</button>
          :
          <Icon category={'BookmarkDelete'} />
          }

        <Link to={`/cards/${props.card._id}`} className={styles.container}>
          <h2 className={styles.container}>{props.card.text.toUpperCase()}</h2>
        </Link>

        </article>
    </>
  )
}

export default Card
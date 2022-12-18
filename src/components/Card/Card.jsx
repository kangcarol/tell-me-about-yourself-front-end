import { Link, useLocation } from 'react-router-dom'
import styles from './Card.module.css'

// Components
import Icon from "../Icon/Icon.jsx"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const Card = (props) => {
  // const location = useLocation()
  return (
    <>
      {/* <div  className={styles.icon}>
        <Icon category={props.card.category} />
        <h2>{props.card.category}</h2>
      </div> */}
        <article className={styles.container}>
          
          {(props.card.favorites===false) ?

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
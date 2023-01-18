import styles from './AuthorInfo.module.css'
import ProfileIcon from '../../assets/icons/profile.png'
import DateCard from '../DateCard/DateCard'

const AuthorInfo = ({ content }) => {
  const photo = content.author.photo ? content.author.photo : ProfileIcon
  return (
    <div className={styles.container}>
        <img src={photo} alt="The user's avatar" className={styles.container}/>
      <div>
        <h4>contributed by</h4>
        <h4>{content.author.name.toUpperCase()}</h4>
        {/* <DateCard createdAt={content.createdAt} /> */}
      </div>
    </div>
  )
}

export default AuthorInfo
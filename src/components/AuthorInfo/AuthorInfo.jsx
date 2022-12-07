import styles from './AuthorInfo.module.css'
import ProfileIcon from '../../assets/icons/profile.png'
import DateCard from '../DateCard/DateCard'

const AuthorInfo = ({ content }) => {
  const photo = content.author.photo ? content.author.photo : ProfileIcon
  return (
    <div className={styles.container}>
      <img src={photo} alt="The user's avatar" />
      <section>
        <h4>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo
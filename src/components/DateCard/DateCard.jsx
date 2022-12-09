import styles from './DateCard.module.css'
import Icon from '../../components/Icon/Icon'

const DateCard = ({ createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()
  return (
    <div className={styles.container}>
      <Icon category="Calendar" />
      <h5>{date}</h5>
    </div>
  )
}

export default DateCard
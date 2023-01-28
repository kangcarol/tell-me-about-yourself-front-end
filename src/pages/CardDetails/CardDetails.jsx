import { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"

// components
import Loading from "../Loading/Loading"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

import styles from "./CardDetails.module.css"

// Services
import * as cardService from "../../services/cardService"

const CardDetails = (props) => {
  const { id } = useParams()
  const [card, setCard] = useState(null)

  useEffect(() => {
    const fetchCard = async () => {
      const data = await cardService.show(id)
      setCard(data)
    }
    fetchCard()
  }, [id])
  
  if (!card) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <h1 className={styles.container}>{card.category.toUpperCase()}</h1>
        <section>
          <h2>{card.text}</h2>
          <details>
            <summary>Need some help?</summary>
            <p>{card.hint}</p>
          </details>
          <details>
            <summary>Answer</summary>
            <p>{card.answer}</p>
            <a href={card.source} rel="noreferrer" target="_blank">-source- </a>
          </details>
          <span>
            <AuthorInfo content={card} />
            {card.author._id === props.user.profile && 
              <span>
                <button onClick={() => props.handleDeleteCard(id)}>Delete</button>
                <button className={styles.primaryButton}><Link to={`/cards/${id}/edit`} state={card}>Edit</Link></button>
              </span>
            }
          </span>
        </section>
      </article>
    </main>
  )
}

export default CardDetails
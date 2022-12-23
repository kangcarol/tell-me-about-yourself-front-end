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
        <header>
          <h3>{card.category.toUpperCase()}</h3>
          <span>
            <AuthorInfo content={card} />
          </span>
        </header>
        <h1>{card.text}</h1>
        <details>
          <summary>Need some help?</summary>
        </details>
        <details>
          <summary>Answer</summary>
          <p>{card.answer}</p>
          <a href={card.source} rel="noreferrer" target="_blank">Source</a>
        </details>
            {card.author._id === props.user.profile && 
              <>
                <button><Link to={`/cards/${id}/edit`} state={card}>Edit</Link></button>
                <button onClick={() => props.handleDeleteCard(id)}>Delete</button>
              </>
            }
      </article>
    </main>
  )
}

export default CardDetails
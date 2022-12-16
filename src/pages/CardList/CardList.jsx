import styles from './CardList.module.css'
import Card from '../../components/Card/Card'
import { Link } from 'react-router-dom'

const CardList = (props) => {
  console.log("cardlist props:" , props)
  return (
    <main className={styles.container}>
      <section>
        <h1>BEHAVIORAL</h1>
        {props.card.map((card, idx) => (
          (card.category === 'Behavioral') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <h1>COMPUTER SCIENCE</h1>
        {props.card.map((card, idx) => (
          (card.category === 'Computer Science') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <h1>JAVASCRIPT</h1>
        {props.card.map((card, idx) => (
          (card.category === 'Javascript') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <h1>PYTHON</h1>
        {props.card.map((card, idx) => (
          (card.category === 'Python') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <h1>FRONT END</h1>
        {props.card.map((card, idx) => (
          (card.category === 'Front End') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <h1>REACT</h1>
        {props.card.map((card, idx) => (
          (card.category === 'React') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <h1>STYLING</h1>
        {props.card.map((card, idx) => (
          (card.category === 'Styling') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <h1>BACK END</h1>
        {props.card.map((card, idx) => (
          (card.category === 'Back End') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <h1>DATABASES</h1>
        {props.card.map((card, idx) => (
          (card.category === 'Databases') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <h1>OTHER</h1>
        {props.card.map((card, idx) => (
          (card.category === 'Other') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
    </main>
  )
}

export default CardList



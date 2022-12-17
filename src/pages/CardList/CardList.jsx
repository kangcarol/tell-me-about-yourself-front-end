import styles from './CardList.module.css'
import Card from '../../components/Card/Card'
import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon.jsx'

const CardList = (props) => {
  console.log("cardlist props:" , props)
  return (
    <main className={styles.container}>
      <section>
        <div>
          <Icon category={'Behavioral'} />
          <h1>BEHAVIORAL</h1>
        </div>
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
      <div>
        <Icon category={'Javascript'} />
        <h1>JAVASCRIPT</h1>
      </div>
        {props.card.map((card, idx) => (
          (card.category === 'Javascript') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <div>
          <Icon category={'Python'} />
          <h1>PYTHON</h1>
        </div>
        {props.card.map((card, idx) => (
          (card.category === 'Python') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <div>
          <Icon category={'Frontend'} />
          <h1>FRONT END</h1>
        </div>
        {props.card.map((card, idx) => (
          (card.category === 'Frontend') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <div>
          <Icon category={'React'} />
          <h1>REACT</h1>
        </div>
        {props.card.map((card, idx) => (
          (card.category === 'React') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <div>
          <Icon category={'Style'} />
          <h1>STYLING</h1>
        </div>
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
          (card.category === 'Backend') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <div>
          <Icon category={'Database'} />
          <h1>DATABASES</h1>
        </div>
        {props.card.map((card, idx) => (
          (card.category === 'Databases') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))}
      </section>
      <section>
        <div>
          <Icon category={'Other'} />
          <h1>OTHER</h1>
        </div>
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



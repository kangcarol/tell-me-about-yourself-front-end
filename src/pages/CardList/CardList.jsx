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
          <Link to="/cards/behavioral">
            <Icon category={'Behavioral'} />
            <h1>BEHAVIORAL</h1>
          </Link>
        </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'Behavioral') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
      <section>
        <div>
        <Link to="/cards/computerscience">
          <Icon category={'CS'} />
          <h1>COMPUTER SCIENCE</h1>
        </Link>
        </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'Computer Science') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
      <section>
      <div>
      <Link to="/cards/javascript">
        <Icon category={'Javascript'} />
        <h1>JAVASCRIPT</h1>
      </Link>
      </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'Javascript') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
      <section>
        <div>
        <Link to="/cards/python">
          <Icon category={'Python'} />
          <h1>PYTHON</h1>
        </Link>
        </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'Python') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
      <section>
        <div>
        <Link to="/cards/frontend">
          <Icon category={'Frontend'} />
          <h1>FRONT END</h1>
        </Link>
        </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'Frontend') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
      <section>
        <div>
        <Link to="/cards/react">
          <Icon category={'React'} />
          <h1>REACT</h1>
        </Link>
        </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'React') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
      <section>
        <div>
        <Link to="/cards/styling">
          <Icon category={'Style'} />
          <h1>STYLING</h1>
        </Link>
        </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'Styling') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
      <section>
        <div>
        <Link to="/cards/backend">
          <Icon category={'Backend'} />
          <h1>BACK END</h1>
        </Link>
        </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'Backend') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
      <section>
        <div>
        <Link to="/cards/databases">
          <Icon category={'Database'} />
          <h1>DATABASES</h1>
        </Link>
        </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'Databases') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
      <section>
        <div>
        <Link to="/cards/other">
          <Icon category={'Other'} />
          <h1>OTHER</h1>
        </Link>
        </div>
        {/* {props.card.map((card, idx) => (
          (card.category === 'Other') ?
          <Card card={card} handleAddFavorites={props.handleAddFavorites} key={card._id} />
          :
          ''
        ))} */}
      </section>
    </main>
  )
}

export default CardList



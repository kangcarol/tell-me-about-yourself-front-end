import styles from './CardList.module.css'
import Card from '../../components/Card/Card'
import { Link } from 'react-router-dom'
import Icon from '../../components/Icon/Icon.jsx'

const CardList = (props) => {
  console.log("cardlist props:" , props)
  return (
    <main className={styles.container}>

        <div>
          <Link to="/cards/behavioral">
            <Icon category={'behavioral'} />
            <h1>BEHAVIORAL</h1>
          </Link>
        </div>

        <div>
        <Link to="/cards/computerscience">
          <Icon category={'computerscience'} />
          <h1>COMPUTER SCIENCE</h1>
        </Link>
        </div>

      <div>
      <Link to="/cards/javascript">
        <Icon category={'javascript'} />
        <h1>JAVASCRIPT</h1>
      </Link>
      </div>

        <div>
        <Link to="/cards/python">
          <Icon category={'python'} />
          <h1>PYTHON</h1>
        </Link>
        </div>

        <div>
        <Link to="/cards/frontend">
          <Icon category={'frontend'} />
          <h1>FRONT END</h1>
        </Link>
        </div>

        <div>
        <Link to="/cards/react">
          <Icon category={'react'} />
          <h1>REACT</h1>
        </Link>
        </div>

        <div>
        <Link to="/cards/styling">
          <Icon category={'styling'} />
          <h1>STYLING</h1>
        </Link>
        </div>

        <div>
        <Link to="/cards/backend">
          <Icon category={'backend'} />
          <h1>BACK END</h1>
        </Link>
        </div>

        <div>
        <Link to="/cards/databases">
          <Icon category={'databases'} />
          <h1>DATABASES</h1>
        </Link>
        </div>

        <div>
        <Link to="/cards/other">
          <Icon category={'other'} />
          <h1>OTHER</h1>
        </Link>
        </div>

    </main>
  )
}

export default CardList



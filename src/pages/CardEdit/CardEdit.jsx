import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './CardEdit.module.css'

const CardEdit = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(state)
  
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateCard(form)
  }

  return (
    <main className={styles.container}A>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input">Question</label>
        <input
          required
          type="text"
          name="text"
          id="text-input"
          value={form.text}
          placeholder="Question"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={form.category}
          onChange={handleChange}
        >
          <option value="Behavioral">Behavioral</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Javascript">Javascript</option>
          <option value="Python">Python</option>
          <option value="Front End">Front End</option>
          <option value="React">React</option>
          <option value="Styling">Styling</option>
          <option value="Back End">Back End</option>
          <option value="Databases">Databases</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default CardEdit
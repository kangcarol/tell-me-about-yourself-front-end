import { useState } from "react";
import styles from './CardNew.module.css'

const CardNew = (props) => {
  const [form, setForm] = useState({
    text: '',
    category: '',
  })

  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddCard(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
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
          <option value="Frontend">Front End</option>
          <option value="React">React</option>
          <option value="Styling">Styling</option>
          <option value="Backend">Back End</option>
          <option value="Databases">Databases</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="text-input">Question</label>
        <input
          required
          type="text"
          name="text"
          id="text-input"
          value={form.text}
          placeholder="Question..."
          onChange={handleChange}
        />
        <label htmlFor="text-input">Answer</label>
        <input
          required
          type="text"
          name="answer"
          id="answer-input"
          value={form.answer}
          placeholder="Answer..."
          onChange={handleChange}
        />
        <label htmlFor="text-input">Source</label>
        <input
          required
          type="text"
          name="source"
          id="source-input"
          value={form.source}
          placeholder="Let's give credit where credit is due!"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>

      </form>
    </main>
  )
}

export default CardNew
import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import styles from './ProfileEdit.module.css'

const ProfileEdit = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)
  const [photoData, setPhotoData] = useState({})

  console.log(state)
  
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateProfile(form, photoData.photo)
  }

  const isFormInvalid = () => {
    return !(form.name && form.email && form.password && form.password === form.passwordConf)
  }

  return (
    <main className={styles.container}>
      <h1>Edit for {form.name}</h1>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="about" className={styles.label}>About</label>
      </div>
      <div>
        <input
          type="text"
          autoComplete="off"
          id="about"
          value={form.about}
          name="about"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="linkedin" className={styles.label}>LinkedIn</label>
      </div>
      <div>
        <input
          type="text"
          autoComplete="off"
          id="linkedin"
          value={form.linkedin}
          name="linkedin"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email</label>
      </div>
      <div>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password</label>
      </div>
      <div>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="confirm" className={styles.label}>
          Confirm Password
        </label>
      </div>
      <div>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={form.passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      {/* <div className={styles.inputContainer}>
        <label htmlFor="photo-upload" className={styles.label}>
          Upload Photo
        </label>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />
      </div> */}
      <div></div>
      <div className={styles.inputContainer}>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <button disabled={isFormInvalid()} className={styles.primaryButton}>
          Update
        </button>
      </div>
    </form>
  </main>
  )
}

export default ProfileEdit
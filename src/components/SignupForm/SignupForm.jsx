import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    linkedin:'',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, photoData.photo)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, about, linkedin, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Name</label>
      </div>
      <div>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="about" className={styles.label}>Tell Me About Yourself</label>
      </div>
      <div>
        <textarea
          type="text"
          autoComplete="off"
          id="about"
          value={about}
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
          value={linkedin}
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
          value={email}
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
          value={password}
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
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="photo-upload" className={styles.label}>
          Upload Photo
        </label>
      </div>
      <div>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />
      </div>
      <div></div>
      <div className={styles.inputContainer}>
        <Link to="/">
          <button type="button" className={styles.button}>Cancel</button>
        </Link>
        <button type="submit" disabled={isFormInvalid()} className={styles.primaryButton}>
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default SignupForm

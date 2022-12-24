import { useState, useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import * as profileService from '../../services/profileService'
import styles from './Profiles.module.css'
import ProfileIcon from '../../assets/icons/profile.png'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <main className={styles.container}>
      <h1>Tell me about yourself...</h1>

      {profiles.length ? 
        <section className={styles.container}>
          {profiles.map(profile =>
            <article className={styles.container} key={profile._id}>

              <div>
              {(profile.photo) ?
                <img src={profile.photo} alt="avatar"/>
                :
                <img src={ProfileIcon} alt="avatar"/>
              }
              <span>
                <h2>{profile.name.toUpperCase()}</h2>
                {(profile.linkedin) ?
                <h4><a href={profile.linkedin} rel= "noreferrer" target="_blank">LinkedIn</a></h4>
                :
                ''}
              </span>
              </div>
              <div>
                <p>{profile.about}</p>
              </div>
            </article>
          )}
        </section>
      :
        <p>No profiles yet</p>
      }
    </main>
  )
}

export default Profiles
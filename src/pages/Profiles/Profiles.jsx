import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import styles from './Profiles.module.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <main className={styles.container}>
      <h1>Tell Me About Yourself Profiles</h1>

      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <div key={profile._id}>
              <h2>{profile.name}</h2>
              <p>"{profile.about} "</p>
            </div>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </main>
  )
}

export default Profiles
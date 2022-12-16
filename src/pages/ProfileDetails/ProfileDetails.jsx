import styles from "./ProfileDetails.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "../../components/Card/Card"
import ProfileIcon from '../../assets/icons/profile.png'

// components
import Loading from "../Loading/Loading"

// Services
import * as profileService from "../../services/profileService"

const ProfileDetails = (props) => {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.show(id)
      setProfile(data)
    }
    fetchProfile()
  }, [id])

  if (!profile) return <Loading />

  return (
    <main className={styles.container}>
      <article className={styles.profileDetails}>

        <header>
            {profile.photo ?
            <img src={profile.photo} alt="User's avatar"/>
            :
            <img src={ProfileIcon} alt="Default avatar"/>}
            <h1>{profile.name.toUpperCase()}</h1>
        </header>

        <h2>Favorites</h2>
          {props.favorites.map(card => (
            
            <Card favorites={true} card={card} key={card._id}/>
            
          ))}

      </article>  
    </main>
  )
}

export default ProfileDetails
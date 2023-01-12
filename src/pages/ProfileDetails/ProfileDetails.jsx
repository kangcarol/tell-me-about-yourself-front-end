import styles from "./ProfileDetails.module.css"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
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

  console.log("PROPS FAVORITES" , props.favorites)

  if (!profile) return <Loading />

  return (
    <main className={styles.container}>

        <div className={styles.container}>
            {profile.photo ?
            <img src={profile.photo} alt="User's avatar"/>
            :
            <img src={ProfileIcon} alt="Default avatar"/>}
          
          <section>
            <h1>{profile.name.toUpperCase()}</h1>
            {(profile.linkedin) ?
                <h4><a href={profile.linkedin} rel= "noreferrer" target="_blank">LinkedIn</a></h4>
                :
                ''}
            <div>
              <p>{profile.about}</p>
            </div>
              <Link to={`/profiles/${id}/edit`} state={profile}>Edit</Link>
          </section>
        </div>
        
        <h1>BOOKMARKS</h1>
        <article className={styles.container} >
          
          {props.favorites.map((card) => (
            <div className={styles.card}>
              <Card favortites={true} card={card} handleAddFavorites={props.handleAddFavorites} handleRemoveFavorites={props.handleRemoveFavorites}key={card._id} />
            </div>
            
          ))}

      </article>  
    </main>
  )
}

export default ProfileDetails
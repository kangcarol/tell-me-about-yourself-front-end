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
            <h2 className={styles.container}>{profile.name.toUpperCase()}</h2>
            {(profile.linkedin) ?
                <h4><a href={profile.linkedin} rel= "noreferrer" target="_blank">LinkedIn</a></h4>
                :
                ''}
            <div>
              <p className={styles.container}>{profile.about}</p>
            </div>
              <Link to={`/profiles/${id}/edit`} state={profile}>Edit</Link>
          </section>
        </div>
        
        <article className={styles.container} >
        <h1>BOOKMARKS</h1>
          
          {props.favorites.map((card, idx) => (
            <div className={styles.card} key={idx}>
              <h4>{card.category.toUpperCase()}</h4>
              <Card favortites={true} card={card} handleAddFavorites={props.handleAddFavorites} handleRemoveFavorites={props.handleRemoveFavorites}key={card._id} />
            </div>
            
          ))}

      </article>  
    </main>
  )
}

export default ProfileDetails
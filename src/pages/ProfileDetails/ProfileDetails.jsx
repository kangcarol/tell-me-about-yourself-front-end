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

        <header className={styles.container}>
            {profile.photo ?
            <img src={profile.photo} alt="User's avatar"/>
            :
            <img src={ProfileIcon} alt="Default avatar"/>}
          
          <section>
            <h1>{profile.name.toUpperCase()}</h1>
            <div>
              <p>{profile.about}</p>
            </div>
              <Link to={`/profiles/${id}/edit`} state={profile}>Edit About</Link>
          </section>
        </header>

        <article>
          <h1>BOOKMARKS</h1>
          {props.favorites.map((card) => (

            <Card favortites={true} card={card} handleAddFavorites={props.handleAddFavorites} handleRemoveFavorites={props.handleRemoveFavorites}key={card._id} />
            
          ))}

      </article>  
    </main>
  )
}

export default ProfileDetails
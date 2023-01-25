// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Profiles from './pages/Profiles/Profiles'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import ProfileEdit from './pages/ProfileEdit/ProfileEdit'
import ChangePassword from './pages/ChangePassword/ChangePassword'

import CardList from './pages/CardList/CardList'
import CardsRandom from './pages/CardsRandom/CardsRandom'
import CardNew from './pages/CardNew/CardNew'
import CardDetails from './pages/CardDetails/CardDetails'
import CardEdit from './pages/CardEdit/CardEdit'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as cardService from './services/cardService'
import * as profileService from './services/profileService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [cards,setCards] = useState([])
  const [profiles, setProfiles] = useState([])
  const [favorites, setFavorites] = useState([])
  // const [categoryCards, setCategoryCards] = useState([])

  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddFavorites = (addedCard) => {
    if (!favorites.includes(addedCard)) {
      setFavorites([addedCard, ...favorites])
    }
    navigate(`/profiles/${user.profile}`)
  }


  //! fix the remove favorite
  const handleRemoveFavorites = (removeCard) => {
    setFavorites(favorites.splice(favorites.indexOf(removeCard),1))
    navigate(`/profiles/${user.profile}`)
  }

  // const handleChooseCategory = (category) => {
  //   setCategoryCards(cards.filter(c => c._category === category))
  //   navigate('/cards')
  // }

  const handleAddCard = async (cardData) => {
    // cardData will have a shape of:
    //   {
    //     "category": "string",
    //     "text": "string"
    //   }
    const newCard = await cardService.create(cardData)
    setCards([newCard, ...cards])
    navigate('/cards')
  }

  const handleUpdateCard = async (cardData) => {
    // cardData._id will be 634daa34dc0dfecfbb5767de for example
    const updatedCard = await cardService.update(cardData)
    // setCards(cards.map((b) => cardData._id === c._id ? updatedCard : c))
    // this is the same as below:
    const updatedCardsData = cards.map(card => {
      return cardData._id === card._id ? updatedCard : card
    })
    setCards(updatedCardsData)
    navigate('/cards')
  }

  const handleDeleteCard = async (id) => {
    const deletedCard = await cardService.deleteCard(id)
    setCards(cards.filter(c => c._id !== deletedCard._id))
    navigate('/cards')
  }
  
  useEffect(() => {
    console.log("The useEffect is running");
    const fetchAllCards = async () => {
      console.log('The Fetch All Cards function is running')
      const data = await cardService.index()
      setCards(data)
    }
    if (user) fetchAllCards()
  }, [user])

  const handleUpdateProfile = async (profileData) => {
    // profileData._id will be 634daa34dc0dfecfbb5767de for example
    const updatedProfile = await profileService.update(profileData)

    const updatedProfileData = profiles.map(profile => {
      return profileData._id === profile._id ? updatedProfile : profile
    })
    setProfiles(updatedProfileData)
    navigate(`/profiles/${user.profile}`)
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      
      <Routes>

        <Route
          path="/"
          element={<Landing user={user} />}
        />
        <Route
          path="/about"
          element={<About user={user}/>}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/cards"
          element={
            <ProtectedRoute user={user}>
              <CardList
              cards={cards}
              favorites={favorites}
              handleAddFavorites={handleAddFavorites}
              handleRemoveFavorites={handleRemoveFavorites}
              // handleChooseCategory={handleChooseCategory}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cardsrandom"
          element={
            <ProtectedRoute user={user}>
              <CardsRandom
              cards={cards}
              favorites={favorites}
              handleAddFavorites={handleAddFavorites}
              handleRemoveFavorites={handleRemoveFavorites}
              // handleChooseCategory={handleChooseCategory}
              />
            </ProtectedRoute>
          }
        />
        <Route path="/cards/:id" element={
          <ProtectedRoute user={user}>
            <CardDetails
            user={user}
            handleDeleteCard={handleDeleteCard}
            handleAddFavorites={handleAddFavorites}
            handleRemoveFavorites={handleRemoveFavorites}
            />
          </ProtectedRoute>
        } />

        <Route 
          path="/cards/new"
          element={
            <ProtectedRoute user={user}>
              <CardNew handleAddCard={handleAddCard} />
            </ProtectedRoute>
          }
        />

        <Route path="/cards/:id/edit" element={
          <ProtectedRoute user={user}>
            <CardEdit handleUpdateCard={handleUpdateCard} />
          </ProtectedRoute>
        } />

        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id"
          element={
            <ProtectedRoute user={user}>
              <ProfileDetails 
              user={user}
              card={cards}
              favorites={favorites}
              handleAddFavorites={handleAddFavorites}
              handleRemoveFavorites={handleRemoveFavorites}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <ProfileEdit 
              user={user}
              profiles={profiles}
              handleUpdateProfile={handleUpdateProfile}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App

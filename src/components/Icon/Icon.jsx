// import Add from '../../assets/icons/add.svg'
// import Edit from '../../assets/icons/edit.svg'
// import News from '../../assets/icons/news.svg'
// import Like from '../../assets/icons/like.svg'
// import Liked from '../../assets/icons/liked.svg'
// import Music from '../../assets/icons/music.svg'
// import Games from '../../assets/icons/games.svg'
// import Trash from '../../assets/icons/trash.svg'
// import Movies from '../../assets/icons/movies.svg'
// import Sports from '../../assets/icons/sports.svg'
// import Create from '../../assets/icons/create.svg'
// import Comments from '../../assets/icons/comments.svg'
// import Calendar from '../../assets/icons/calendar.svg'
// import Televison from '../../assets/icons/television.svg'

const Icon = ({ category }) => {
  const icons = {
    // Add: Add,
    // News: News,
    // Like: Like,
    // Edit: Edit,
    // Music: Music,
    // Games: Games,
    // Liked: Liked,
    // Trash: Trash,
    // Movies: Movies,
    // Sports: Sports,
    // Create: Create,
    // Calendar: Calendar,
    // Comments: Comments,
    // Television: Televison,
  }

  return <img className="icon" src={icons[category]} alt={`${category} icon`} />
}

export default Icon
// import Add from '../../assets/icons/add.svg'
// import Edit from '../../assets/icons/edit.svg'
// import Like from '../../assets/icons/like.svg'
// import Liked from '../../assets/icons/liked.svg'
// import Trash from '../../assets/icons/trash.svg'
import Bookmark from '../../assets/icons/bookmark.svg'
import Javascript from '../../assets/icons/javascript.svg'
import React from '../../assets/icons/react.svg'
import Python from '../../assets/icons/python.svg'
// import Movies from '../../assets/icons/movies.svg'
// import Create from '../../assets/icons/create.svg'
// import Comments from '../../assets/icons/comments.svg'
import Calendar from '../../assets/icons/calendar.svg'
import Other from '../../assets/icons/pin.svg'

const Icon = ({ category }) => {
  const icons = { 
    // Add: Add,
    // Edit: Edit,
    // Liked: Liked,
    // Trash: Trash,
    Bookmark: Bookmark,
    Javascript: Javascript,
    Python: Python,
    React: React,
    Other: Other,
    // Movies: Movies,
    // Sports: Sports,
    // Create: Create,
    Calendar: Calendar,
    // Comments: Comments,
    // Television: Televison,
  }

  return <img className="icon" src={icons[category]} alt={`${category} icon`} />
}

export default Icon
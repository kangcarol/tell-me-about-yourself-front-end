// import Add from '../../assets/icons/add.svg'
// import Edit from '../../assets/icons/edit.svg'
// import Like from '../../assets/icons/like.svg'
// import Liked from '../../assets/icons/liked.svg'
// import Trash from '../../assets/icons/trash.svg'
import Bookmark from '../../assets/icons/bookmark.svg'
import BookmarkAdd from '../../assets/icons/bookmark-add.svg'
import BookmarkDelete from '../../assets/icons/bookmark-delete.svg'
import Behavioral from '../../assets/icons/behavioral.png'
import Javascript from '../../assets/icons/javascript.svg'
import React from '../../assets/icons/react.svg'
import Python from '../../assets/icons/python.svg'
// import Create from '../../assets/icons/create.svg'
// import Comments from '../../assets/icons/comments.svg'
import Calendar from '../../assets/icons/calendar.svg'
import Frontend from '../../assets/icons/frontend.svg'
import Backend from '../../assets/icons/backend.svg'
import Database from '../../assets/icons/database.svg'
import Style from '../../assets/icons/style.svg'
import Other from '../../assets/icons/pin.svg'

const Icon = ({ category }) => {
  const icons = { 
    // Add: Add,
    // Edit: Edit,
    // Liked: Liked,
    // Trash: Trash,
    Bookmark: Bookmark,
    BookmarkAdd: BookmarkAdd,
    BookmarkDelete: BookmarkDelete,
    Behavioral: Behavioral,
    Javascript: Javascript,
    Python: Python,
    React: React,
    Other: Other,
    Style: Style,
    Frontend: Frontend,
    Backend: Backend,
    Database: Database,
    Calendar: Calendar,
    // Create: Create,
    // Comments: Comments,
    // Television: Televison,
  }

  return <img className="icon" src={icons[category]} alt={`${category} icon`} />
}

export default Icon
import React from 'react'
import {Link} from 'react-router-dom'
import "./ProfileScreen.css"
function ProfileScreen() {
  return (
    <div className='profile__screen'>
       <h1 className='edit'>Your profile</h1>
       <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
       <p className='name'>name@gmail.com</p>
      <button> <Link to="/" className="btn btn-primary" id='buttonn'>Sign out</Link> </button>
    </div>
  )
}

export default ProfileScreen
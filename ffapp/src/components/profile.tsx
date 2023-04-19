
import React from 'react'

type Props = {
  avatar:string;
  username:string;
  bio:string;
}

const Profile = ({ avatar, username, bio }: Props) => {
  return (
    <>
      <div className="profile-container">
        <img src={ avatar } alt="avatar" className='img-fluid' />
        <h2>{ username }</h2>
        <p className='text-center my-3'>{ bio }</p>
      </div>
    </>
  )
}

export default Profile
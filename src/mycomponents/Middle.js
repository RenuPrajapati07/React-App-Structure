import React from 'react'
import userImmage from '../image/user.jpg'

export default function Middle() {
  return (
    <div>
        <h2>I am the Middle Component</h2>
        <img src={userImmage} alt='user profile'></img>
    </div>
  )
}

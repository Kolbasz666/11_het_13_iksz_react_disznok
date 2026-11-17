import React, { useState } from 'react'
import Login from './Login'
import Registration from './Registration'

function User({ loggedIn, setLoggedIn, serverUrl }) {

  const [showLogin, setShowLogin] = useState(true)

  function Logout() {
    sessionStorage.clear()
    setLoggedIn(false)
  }

  return (
    <div>
      <p>Welcome to the pig farm!</p>
      {
        loggedIn ?
          <button className='btn btn-danger' onClick={Logout}>Logout</button> :
          <>
            {showLogin ?
              <Login serverUrl={serverUrl} setLoggedIn={setLoggedIn} setShowLogin={setShowLogin}/> :
              <Registration serverUrl={serverUrl} setShowLogin={setShowLogin} />}
          </>
      }
    </div>
  )
}

export default User
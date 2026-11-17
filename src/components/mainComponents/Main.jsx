import React, { useState } from 'react'
import User from '../userComponents/User'
import Content from '../otherComponents/Content'

function Main({ serverUrl }) {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <main className='container'>
      <div className='row'>
        <div className="col-4">
          <User />
        </div>
        <div className="col-8">
          <Content loggedIn={loggedIn} serverUrl={serverUrl} />
        </div>
      </div>
    </main>
  )
}

export default Main
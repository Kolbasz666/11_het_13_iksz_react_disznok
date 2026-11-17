import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pig from './Pig'

function Content({ loggedIn, serverUrl }) {
  const [pigs, setPigs] = useState([])

  async function Load() {
    if (!loggedIn) {
      const res = await axios.get(serverUrl + '/pig')
      setPigs(res.data.result)
    }
    else {
      const res = await axios.get(serverUrl + '/mypig', {
        headers: { Authorization: sessionStorage.getItem('token') }
      })
      setPigs(res.data.result)
    }
  }

  useEffect(() => {
    Load()
  }, [loggedIn])

  return (
    <section className='row'>
      <h2>Pigs</h2>
      {
        pigs.map((onePig) => <Pig data={onePig} loggedIn={loggedIn} serverUrl={serverUrl} />)
      }
    </section>
  )
}

export default Content
import React, { useState } from 'react'
import axios from 'axios'

function Pig({ data, loggedIn, serverUrl }) {
  const [deleted, setDeleted] = useState(false)

  async function DeletePig(id) {
    try {
      await axios.delete(`${serverUrl}/pig/${id}`, {
        headers: { Authorization: sessionStorage.getItem('token') }
      })
      setDeleted(true)
    } catch (error) {
      console.log(error);
      alert(`Error while deleteing pig ${id}`)
    }
  }

  return (<>
    {
      deleted ? <></> : <div className='card col-12 col-md-6 col-lg-4 col-xl-3'>
        <p className='fs-5'><b>Pig name: <i>{data.name}</i></b></p>
        <p>Gender: <i>{data.gender}</i></p>
        <p>Weight: <i>{data.weight}kg</i></p>
        {
          loggedIn ? <button onClick={() => DeletePig(data.id)}>Delete</button> : <></>
        }
      </div>
    }
  </>
  )
}

export default Pig
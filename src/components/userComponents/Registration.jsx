import React, { useState } from 'react'

function Registration({setShowLogin, serverUrl}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function RegFunction() {
    try {
      await axios.post(`${serverUrl}/reg`, { username, password })
      alert("successful registration")
      setShowLogin(true)
    } catch (error) {
      console.log(error);
      alert('Unsuccessful registration')
    }
  }

  return (
    <>
      <p>Registration</p>
      <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <button className='btn btn-primary' onClick={RegFunction}>Registration</button>
      <button className='btn btn-secondary' onClick={() => setShowLogin(true)}>Login</button>
    </>

  )
}

export default Registration
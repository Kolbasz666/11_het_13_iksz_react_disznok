import axios from 'axios'
import React, { useState } from 'react'

function Login({ serverUrl, setLoggedIn, setShowLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function LoginFunction() {
    try {
      const response = await axios.post(`${serverUrl}/login`, { username, password })
      sessionStorage.setItem('token', response.data.token)
      setLoggedIn(true)
    } catch (error) {
      console.log(error);
      alert('Unsuccessful login')
    }
  }

  return (
    <>
      <p>Login</p>
      <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <button className='btn btn-primary' onClick={LoginFunction}>Login</button>
      <button className='btn btn-secondary' onClick={() => setShowLogin(false)}>Registration</button>
    </>
  )
}

export default Login
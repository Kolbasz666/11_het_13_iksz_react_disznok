import { useState } from 'react'
import './App.css'
import Header from './components/mainComponents/Header'
import Main from './components/mainComponents/Main'
import Footer from './components/mainComponents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header text={Pigs}/>
      <Main/>
      <Footer className={'9.i'} name={'Zsár Dániel'} />
    </>
  )
}

export default App

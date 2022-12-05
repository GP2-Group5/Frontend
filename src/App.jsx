import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Login from './pages/Login'
import Sidebar from './components/Sidebar'
import Userlist from './pages/Userlist'
import Detail from './pages/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login/>
      {/* <Sidebar/> */}
      {<Userlist/>}
      {<Detail/>}
    </div>
  )
}

export default App

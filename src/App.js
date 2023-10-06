import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './HomePage'
import VideoChat from './VideoChat'

import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>

        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/videoChat' element={<VideoChat/>} />  
          </Routes>
       

    </div>
  )
}

export default App
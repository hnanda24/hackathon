import React from 'react'
import {  Route, Routes } from 'react-router-dom';


import Navbar from './Components/Navbar'
import HomePage from './HomePage'
import VideoChat from './VideoChat'

import {Route, Routes} from 'react-router-dom'
import Exercise from './Components/Exercise'
import Footer from './Components/Footer'

import MoodTracker from './Components/MoodTracker';
import Mindful_Exercises from './Components/Mindful_Exercises';

const App = () => {
  return (
    <div>

        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/videoChat' element={<VideoChat/>} />  
          </Routes>
       


          <Routes>

            
            <Route path="/mindful" element={<Mindful_Exercises />}/>
              
           

          </Routes>
        
        
        <Footer/>
    </div>
  )
}

export default App
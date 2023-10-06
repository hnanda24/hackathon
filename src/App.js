import React from 'react'
import {  Route, Routes } from 'react-router-dom';


import Navbar from './Components/Navbar'

import Exercise from './Components/Exercise'
import Footer from './Components/Footer'
import Homepage from './Homepage';
import MoodTracker from './Components/MoodTracker';
import Mindful_Exercises from './Components/Mindful_Exercises';

const App = () => {
  return (
    <div>

        <Navbar></Navbar>

          <Routes>

            <Route path="/" element={<Homepage/>} />
            <Route path="/mindful" element={<Mindful_Exercises />}/>
              
           

          </Routes>
        
        
        <Footer/>
    </div>
  )
}

export default App
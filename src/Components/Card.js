import React from 'react'
import '../assets/Card.css'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div>

    <h1 className='featureHeading'>Top Programs For Mental Health</h1>

    <div className='cards'>

      <Link to='/mindful'>
        <div className='cardContent'>
          <p className='para'>Mindful Exercise</p>
          <img src='first.png' alt='' className='featureImage'></img>
        </div>
      </Link>

      <Link to='/meditation'>
        <div className='cardContent'>
          <p className='para'>Meditation</p>
          <img src='second.png' alt='' className='featureImage'></img>
        </div>
      </Link>

      <Link to='/videochat'>
        <div className='cardContent'>
          <p className='para'>Call with Professional</p>
          <img src='third.png' alt='' className='featureImage'></img>
        </div>
      </Link>

      <Link to='/community'>
        <div className='cardContent'>
          <p className='para'>Community</p>
          <img src='fourth.png' alt='' className='featureImage'></img>
        </div>
      </Link>
      
    </div>

    </div>
  )
}

export default Card
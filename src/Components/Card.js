import React from 'react'
import '../assets/Card.css'

const Card = () => {
  return (
    <div>

    <h1 className='featureHeading'>Top Programs For Mental Health</h1>

    <div className='cards'>

      <div>
        <img src='first.png' alt='' className='featureImage'></img>
      </div>

      <div>
        <img src='second.png' alt='' className='featureImage'></img>
      </div>

      <div>
        <img src='third.png' alt='' className='featureImage'></img>
      </div>

      <div>
        <img src='fourth.png' alt='' className='featureImage'></img>
      </div>
      
    </div>

    </div>
  )
}

export default Card
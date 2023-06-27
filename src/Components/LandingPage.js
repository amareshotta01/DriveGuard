import React from 'react'
import './LandingPage.css'
import driveGuardImage from '../Images/DriveGaurd1.jpg';
import D from '../Images/5a01ba7a7ca233f48ba627a8.png';

const LandingPage = () => {
  return (
    <div className='container'> 
      <div className="main-content">
      <div className="text-part">
      <div className="header"><img src={D} alt="" className='logo'/><p>rive</p> <p>Gaurd</p></div>
        <p className='text'>Welcome</p>
        <p className='text'>to</p>
        <p className='text'>DriveGuard</p>
        <button className='btn' >Get started</button>
        </div>
        <div className="image-part">
            <img src={driveGuardImage} alt="" />
        </div>
        </div>

    </div>
  )
}

export default LandingPage

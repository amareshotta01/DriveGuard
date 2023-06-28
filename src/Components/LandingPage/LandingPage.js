import React, { useEffect, useRef } from 'react';
import './LandingPage.css';
import D from '../Images/5a01ba7a7ca233f48ba627a8.png';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

const LandingPage = () => {
  const welcomeRef = useRef(null);
  const toRef = useRef(null);
  const driveGuardRef = useRef(null);

  useEffect(() => {
    const welcomeOptions = {
      strings: ["Welcome"],
      typeSpeed: 100,
      showCursor: false,
      onComplete: () => {
        const toTyped = new Typed(toRef.current, toOptions);
      }
    };

    const toOptions = {
      strings: ["to"],
      typeSpeed: 100,
      showCursor: false,
      onComplete: () => {
        const driveGuardTyped = new Typed(driveGuardRef.current, driveGuardOptions);
      }
    };

    const driveGuardOptions = {
      strings: ["DriveGuard"],
      typeSpeed: 100,
      loop: false,
      showCursor: false,
    };

    const welcomeTyped = new Typed(welcomeRef.current, welcomeOptions);

    return () => {
      welcomeTyped.destroy();
    };
  }, []);

  return (
    <div className='container'> 
      <div className="main-content">
        <div className="text-part">
          <div className="header">
            <img src={D} alt="" className='logo' />
            <p>rive</p>
            <p>Guard</p>
          </div>
          <p className='text' ref={welcomeRef}></p>
          <p className='text' ref={toRef}></p>
          <p className='text' ref={driveGuardRef}></p>
          <Link to="/login" className='link'>Get started</Link>
        </div>
        <div className="image-part">
          {/* Image content */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

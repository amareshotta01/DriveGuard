import React, { useEffect, useRef } from 'react';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {  useNavigate } from 'react-router-dom';
import Typed from 'typed.js';


const LandingPage = () => {
  const welcomeRef = useRef(null);
  const toRef = useRef(null);
  const driveGuardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const welcomeOptions = {
      strings: ['Welcome'],
      typeSpeed: 100,
      showCursor: false,
      onComplete: () => {
        new Typed(toRef.current, toOptions);
      },
    };

    const toOptions = {
      strings: ['to'],
      typeSpeed: 100,
      showCursor: false,
      onComplete: () => {
        new Typed(driveGuardRef.current, driveGuardOptions);
      },
    };

    const driveGuardOptions = {
      strings: ['DRIVEguard'],
      typeSpeed: 100,
      loop: false,
      showCursor: false,
    };

    const welcomeTyped = new Typed(welcomeRef.current, welcomeOptions);

    return () => {
      welcomeTyped.destroy();
    };
  }, []);

  const handleGetStarted = () => {
    setTimeout(() => {
      navigate('/loading');
    }, 100);
  };

  return (
    <div className="wrapper">
      <div className="main-content">
        <div className="text-part">
          <div className="heading">
              <b>DRIVE</b><div className='logo-header'> guard.</div>
          </div>
          
            <b className="text" ref={welcomeRef}></b>
            <b className="text" ref={toRef}></b>
            <b className="text" ref={driveGuardRef}></b>
            <span className="link" onClick={handleGetStarted}>
              Get started <FontAwesomeIcon icon={faArrowRight} />
            </span>
        </div>
        <div className="image-part">{/* Image content */}</div>
      </div>
    </div>
  );
};

export default LandingPage;
import React from 'react'
import loadingGif from './Simple Car Animation.gif'; 
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };
  return (
    <div className="text-center">
        <img src={loadingGif} onLoad={handleGetStarted} alt="loading" />
    </div>
  )
}

export default Loading




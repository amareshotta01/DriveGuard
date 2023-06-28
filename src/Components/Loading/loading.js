import React from 'react'
import loadingGif from './Simple Car Animation.gif'; 
import { useNavigate } from 'react-router-dom';
import './loading.css'

const Loading = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };
  return (
    <div className="text-center">
        <img src={loadingGif} onLoad={handleGetStarted} alt="loading" className='LoadingImg' />
    </div>
  )
}

export default Loading




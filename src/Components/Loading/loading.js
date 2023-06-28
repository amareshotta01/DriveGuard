import React from 'react'
import loadingGif from './Simple Car Animation.gif'; // Import the GIF file

const loading = () => {
  return (
    <div className="text-center">
        <img src={loadingGif} alt="loading" />
    </div>
  )
}

export default loading




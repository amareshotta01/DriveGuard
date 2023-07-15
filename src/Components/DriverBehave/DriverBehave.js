import React, { useState } from 'react';
import './DriverBehave.css'

const DriverBehave = () => {
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  //exporting the state variable for reward system
  // function getPrediction() {
  //   return prediction;
  //   };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    setLoading(true); 

    try {
      const response = await fetch('https://amaresh01.pythonanywhere.com/predict', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data.prediction);
        localStorage.setItem('prediction-driver',prediction);
      } else {
        throw new Error('Prediction failed');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className='driver-box'>
    <div className='predict-box '>
      <h1 className="mb-4">Predict Driver Behavior</h1>
      <form  className="" onSubmit={handleSubmit}>
        <div className="user-box">
         
          <input type="number" name="x_accel" id="x_accel" step="0.01" required/>
          <label htmlFor="x_accel">X Acceleration:</label>
        </div>
        <div className='user-box'>      
          
          <input type="number" name="y_accel" id="y_accel" step="0.01" required />
          <label htmlFor="y_accel">Y Acceleration:</label>
        </div>
        <div className='user-box'>
          
          <input type="number" name="z_accel" id="z_accel" step="0.01" required />
          <label htmlFor="z_accel">Z Acceleration:</label>
        </div>
        <div className='user-box'>
          
          <input type="number" name="x_gyro" id="x_gyro" step="0.01" required />
          <label htmlFor="x_gyro">X Gyroscope:</label>
        </div>
        <div className='user-box'>
          
          <input type="number" name="y_gyro" id="y_gyro" step="0.01" required />
          <label htmlFor="y_gyro">Y Gyroscope:</label>
        </div>
        <div className='user-box'>
          
          <input type="number" name="z_gyro" id="z_gyro" step="0.01" required />
          <label htmlFor="z_gyro">Z Gyroscope:</label>
        </div>


        
        <div className='button'>
          {!loading && (
            <input type="submit" className="predict-btn" value="Predict" />
          )}
        </div>

        {loading && (
          <div className='loading'>LOADING...
            (This might take some time(approx. 5 minutes))</div>
        )}

        {prediction && !loading && (
          <h2 className='prediction'>Prediction: {prediction}</h2>
        )}
      </form>
    </div>
    </div>

  );
};

export default DriverBehave;

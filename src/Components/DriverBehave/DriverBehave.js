import React, { useState } from 'react';

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
      const response = await fetch('/predict', {
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
    <div className='container-xl w-50 h-50 mt-5 border justify-content-center'>
      <h1 className="mb-4">Predict Driver Behavior</h1>
      <form  className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="x_accel">X Acceleration:</label>
          <input type="number" name="x_accel" id="x_accel" step="0.01" required/><br/>
        </div>
        <div className='mb-3'>      
          <label htmlFor="y_accel">Y Acceleration:</label>
          <input type="number" name="y_accel" id="y_accel" step="0.01" required /><br />
        </div>
        <div className='mb-3'>
          <label htmlFor="z_accel">Z Acceleration:</label>
          <input type="number" name="z_accel" id="z_accel" step="0.01" required /><br />
        </div>
        <div className='mb-3'>
          <label htmlFor="x_gyro">X Gyroscope:</label>
          <input type="number" name="x_gyro" id="x_gyro" step="0.01" required /><br />
        </div>
        <div className='mb-3'>
          <label htmlFor="y_gyro">Y Gyroscope:</label>
          <input type="number" name="y_gyro" id="y_gyro" step="0.01" required /><br />
        </div>
        <div className='mb-3'>
          <label htmlFor="z_gyro">Z Gyroscope:</label>
          <input type="number" name="z_gyro" id="z_gyro" step="0.01" required /><br />
        </div>

        <div className=''>
          <input type="submit" className="predict-btn" value="Predict" />
        </div>

        {loading && (
          <div>LOADING...
            (This might take some time(approx. 5 minutes))</div>
        )}

        {prediction && !loading && (
          <h2>Prediction: {prediction}</h2>
        )}
      </form>
    </div>
  );
};

export default DriverBehave;

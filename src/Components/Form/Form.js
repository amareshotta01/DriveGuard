import React, { useState } from 'react';

const Form = () => {
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    setLoading(true); // Set loading state to true

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
      } else {
        throw new Error('Prediction failed');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div>
      <h1>Predict Behavior</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="x_accel">X Acceleration:</label>
        <input type="number" name="x_accel" id="x_accel" step="0.01" required/><br/>

        <label htmlFor="y_accel">Y Acceleration:</label>
        <input type="number" name="y_accel" id="y_accel" step="0.01" required /><br />

        <label htmlFor="z_accel">Z Acceleration:</label>
        <input type="number" name="z_accel" id="z_accel" step="0.01" required /><br />

        <label htmlFor="x_gyro">X Gyroscope:</label>
        <input type="number" name="x_gyro" id="x_gyro" step="0.01" required /><br />

        <label htmlFor="y_gyro">Y Gyroscope:</label>
        <input type="number" name="y_gyro" id="y_gyro" step="0.01" required /><br />

        <label htmlFor="z_gyro">Z Gyroscope:</label>
        <input type="number" name="z_gyro" id="z_gyro" step="0.01" required /><br />


        <input type="submit" value="Predict" />

        {loading && (
          <div>Loading...</div>
        )}

        {prediction && !loading && (
          <h2>Prediction: {prediction}</h2>
        )}
      </form>
    </div>
  );
};

export default Form;

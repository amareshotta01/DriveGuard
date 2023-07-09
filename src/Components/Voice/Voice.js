import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice = () => {
  const [loading, setLoading] = useState(false);
  const [predictedCategory, setPredictedCategory] = useState('');

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const sendTranscript = () => {
    setLoading(true);

    fetch('/predict_behavior', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transcript }),
    })
      .then(response => response.json())
      .then(data => {
        setPredictedCategory(data.predicted_category);
        localStorage.setItem('prediction-voice',predictedCategory);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error predicting behavior:', error);
        setLoading(false);
      });
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='container-xl border mt-5 p-3'>
      <span>Microphone: {listening ? 'on' : 'off'}</span><br/><br/>
      <div>
        <button className="mx-2 btn btn-dark" onClick={SpeechRecognition.startListening}>Start</button>
        <button className="mx-2 btn btn-dark" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className="mx-2 btn btn-dark" onClick={resetTranscript}>Reset</button>
      </div>
      
      <p>{transcript}</p>
      <button className="btn btn-dark" onClick={sendTranscript}>Send Transcript</button>
      {loading && <p>Loading...</p>}
      {predictedCategory && <h4>Predicted Category:{predictedCategory}</h4>}
      {/* <Gamify predictionCategory={predictedCategory} /> */}
    </div>
  );
};

export default Voice;

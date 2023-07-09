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

    fetch('http://localhost:5000/predict_behavior', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transcript }),
    })
      .then(response => response.json())
      .then(data => {
        setPredictedCategory(data.predicted_category);
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
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <button onClick={sendTranscript}>Send Transcript</button>
      {loading && <p>Loading...</p>}
      {predictedCategory && <p>Predicted Category: {predictedCategory}</p>}
    </div>
  );
};

export default Voice;

// import { getPrediction } from '../DriverBehave/DriverBehave';
//   const value = getPrediction();

// import React, { useState } from 'react';

// const Gamify = () => {
//   const [rewardPoints, setRewardPoints] = useState(0);
//   const [rewards, setRewards] = useState([]);

//   const handleSafetyEvent = () => {
//     // Simulating a safety event occurring, such as following safety protocols
//     // You can customize this function based on your specific requirements

//     // Increase reward points by 10 for reporting a safety event
//     const updatedRewardPoints = rewardPoints + 10;
//     setRewardPoints(updatedRewardPoints);

//     // Check if the reward points reach certain thresholds for earning rewards
//     if (updatedRewardPoints === 50) {
//       // Reward for reaching 50 points
//       const newReward = {
//         id: Date.now(),
//         title: 'Safety Star',
//         description: 'You earned a Safety Star for reaching 50 reward points!',
//       };
//       setRewards([...rewards, newReward]);
//     } else if (updatedRewardPoints === 100) {
//       // Reward for reaching 100 points
//       const newReward = {
//         id: Date.now(),
//         title: 'Safety Champion',
//         description: 'Congratulations! You are a Safety Champion for reaching 100 reward points!',
//       };
//       setRewards([...rewards, newReward]);
//     }
//   };

//   return (
//     <div>
//       <h2>Reward System</h2>
//       <p>Reward Points: {rewardPoints}</p>
//       <button onClick={handleSafetyEvent}>Report Safety Event</button>

//       <h3>My Rewards</h3>
//       {rewards.length > 0 ? (
//         <ul>
//           {rewards.map((reward) => (
//             <li key={reward.id}>
//               <strong>{reward.title}</strong>: {reward.description}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No rewards earned yet.</p>
//       )}
//     </div>
//   );
// };

// export default Gamify;

import React, { useState } from 'react';

const Gamify = () => {
  const predictionVoice = localStorage.getItem('prediction-voice');
  const predictionDriver = localStorage.getItem('prediction-driver');

  const [rewardPoints, setRewardPoints] = useState(0);
  const [rewards, setRewards] = useState([]);

  const handleSafetyEvent = () => {
    let pointChange = 0;
    if (predictionVoice === 'Normal' || predictionDriver === 'Normal') {
      pointChange = 10; // Increment points by 10 for normal or good predictions
    } else if (
      predictionVoice === 'Aggressive' ||
      predictionVoice === 'Risky' || 
      predictionDriver === 'Aggressive' ||
      predictionDriver === 'Risky'
    ) {
      pointChange = -10; // Decrement points by 10 for bad, aggressive, or risky predictions
    }

    // Update the reward points
    const updatedRewardPoints = rewardPoints + pointChange;
    setRewardPoints(updatedRewardPoints);

    // Check if the reward points reach certain thresholds for earning rewards
    if (updatedRewardPoints === 50) {
      // Reward for reaching 50 points
      const newReward = {
        id: Date.now(),
        title: 'Safety Star',
        description: 'You earned a Safety Star for reaching 50 reward points!',
      };
      setRewards([...rewards, newReward]);
    } else if (updatedRewardPoints === 100) {
      // Reward for reaching 100 points
      const newReward = {
        id: Date.now(),
        title: 'Safety Champion',
        description: 'Congratulations! You are a Safety Champion for reaching 100 reward points!',
      };
      setRewards([...rewards, newReward]);
    }
  };

  return (
    <div className='container-xl border mt-5 p-3'>
      <h1>Reward System</h1><hr/><hr/>
      <h3>Reward Points: {rewardPoints}</h3>
      <button onClick={handleSafetyEvent}>Report Safety Event</button>
      <br/><br/><br/>
      <h3 className='mt-6'>My Rewards</h3>
      {rewards.length > 0 ? (
        <ul>
          {rewards.map((reward) => (
            <li key={reward.id}>
              <strong>{reward.title}</strong>: {reward.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No rewards earned yet.</p>
      )}
    </div>
  );
};

export default Gamify;



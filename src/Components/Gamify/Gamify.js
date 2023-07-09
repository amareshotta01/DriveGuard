// import { getPrediction } from '../DriverBehave/DriverBehave';
//   const value = getPrediction();

import React, { useState } from 'react';

const Gamify = () => {
  const [rewardPoints, setRewardPoints] = useState(0);
  const [rewards, setRewards] = useState([]);

  const handleSafetyEvent = () => {
    // Simulating a safety event occurring, such as following safety protocols
    // You can customize this function based on your specific requirements

    // Increase reward points by 10 for reporting a safety event
    const updatedRewardPoints = rewardPoints + 10;
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
    <div>
      <h2>Reward System</h2>
      <p>Reward Points: {rewardPoints}</p>
      <button onClick={handleSafetyEvent}>Report Safety Event</button>

      <h3>My Rewards</h3>
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


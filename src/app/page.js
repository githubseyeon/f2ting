// app/page.js
'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [receiptChallenges, setReceiptChallenges] = useState([]);
  const [receipts, setReceipts] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [rDaily, setRDaily] = useState([]);
  const [cDaily, setCDaily] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchDataFromApi = async (endpoint) => {
        const response = await fetch(endpoint);
        return response.json();
      };

      const [
        userData,
        challengeData,
        receiptChallengeData,
        receiptData,
        rewardData,
        rDailyData,
        cDailyData,
      ] = await Promise.all([
        fetchDataFromApi('/api/users'),
        fetchDataFromApi('/api/challenges'),
        fetchDataFromApi('/api/receipt_challenges'),
        fetchDataFromApi('/api/receipts'),
        fetchDataFromApi('/api/rewards'),
        fetchDataFromApi('/api/r_daily'),
        fetchDataFromApi('/api/c_daily'),
      ]);

      setUsers(userData);
      setChallenges(challengeData);
      setReceiptChallenges(receiptChallengeData);
      setReceipts(receiptData);
      setRewards(rewardData);
      setRDaily(rDailyData);
      setCDaily(cDailyData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.user_id}>{user.username}</li>
        ))}
      </ul>

      <h1>Challenges</h1>
      <ul>
        {challenges.map(challenge => (
          <li key={challenge.challenge_id}>{challenge.challenge_name}</li>
        ))}
      </ul>

      <h1>Receipt Challenges</h1>
      <ul>
        {receiptChallenges.map(rc => (
          <li key={rc.receipt_challenge_id}>{rc.r_challenge_name}</li>
        ))}
      </ul>

      <h1>Receipts</h1>
      <ul>
        {receipts.map(receipt => (
          <li key={receipt.receipt_id}>{`Verified: ${receipt.verified}, Healthy: ${receipt.healthy}`}</li>
        ))}
      </ul>

      <h1>Rewards</h1>
      <ul>
        {rewards.map(reward => (
          <li key={reward.reward_id}>{`Type: ${reward.reward_type}, Value: ${reward.reward_value}`}</li>
        ))}
      </ul>

      <h1>R Daily</h1>
      <ul>
        {rDaily.map(rd => (
          <li key={rd.r_daily_id}>{`Date: ${rd.status_date}, Success: ${rd.is_success}`}</li>
        ))}
      </ul>

      <h1>C Daily</h1>
      <ul>
        {cDaily.map(cd => (
          <li key={cd.c_daily_id}>{`Date: ${cd.status_date}, Success: ${cd.is_success}`}</li>
        ))}
      </ul>
    </div>
  );
}

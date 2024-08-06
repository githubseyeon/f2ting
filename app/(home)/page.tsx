"use client";

import Layout from '../layout';
import '../../styles/global.css';
import styles from '../../styles/home.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import React from 'react';
// import { useState, useEffect } from 'react';

// // Define the fetch function
// async function fetchCoins() {
//   try {
//     const response = await fetch('https://api.coinpaprika.com/v1/tickers');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Failed to fetch coins:', error);
//     return []; // Return an empty array in case of error
//   }
// }

// // Define the Coin interface
// interface Coin {
//   id: string;
//   name: string;
//   symbol: string;
//   quotes: {
//     USD: {
//       price: number;
//     };
//   };
// }

// // Define the Reward component
// function Reward() {
//   const [coins, setCoins] = useState<Coin[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadCoins = async () => {
//       try {
//         const coinsData = await fetchCoins();
//         setCoins(coinsData);
//       } catch (error) {
//         setError('Failed to load coins');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCoins();
//   }, []);

//   return (
//     <div>
//       <h1>Reward Page</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {!loading && !error && (
//         <ul>
//           {coins.map((coin) => (
//             <li key={coin.id}>
//               {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(2)}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

const Home = () => {
  const name = "Lion"
  const reward = 500
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    // 슬라이드 변경 시간
    speed: 2000,
    // 자동 재생 유지 시간
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Layout>
      <div className={styles.topContainer}>
        <div className={styles.greeting}>Hello {name},</div>
        {/* <Reward /> */}
        <div className={styles.rewardDescription}>Your Total Rewards!</div>
        <div className={styles.reward}>${reward}</div>
      </div>
      <div className={styles.middleContainer}>
        <div>
          <div>🎫</div>
          <div>기프티콘 교환</div>
        </div>
        <div>
          <div>🎁</div>
          <div>선물하기</div>
        </div>
        <div>
          <div>🔙</div>
          <div>내역</div>
        </div>
      </div>
      <div className={styles.challengeTitle}>Challenges</div>
      <div className={styles.challengeSeemore}>See More</div>
      <div className={styles.challengeContainer}>
        <div className={styles.challengeSmallerContainer}>
          <div>영수증</div>
          <div>🧾</div>
        </div>
        <div className={styles.challengeSmallerContainer}>
          <div>기상</div>
          <div>🛏️</div>
        </div>
        <div className={styles.challengeSmallerContainer}>
          <div>식단</div>      
          <div>🍽️</div>
        </div>
        <div className={styles.challengeSmallerContainer}>
          <div>운동</div>
          <div>👟</div>
        </div>
      </div>
      <div className={styles.premiumdiv}>Premium Service</div>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          >
          <div>
            <img src='/images/ad1.png' alt='1' />
          </div>
          <div>
            <img src='/images/ad2.png' alt='2' />
          </div>
          <div>
            <img src='/images/ad3.png' alt='3' />
          </div>
        </Carousel>
    </Layout>
  );
};

export default Home;

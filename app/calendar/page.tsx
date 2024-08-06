"use client";

import React, { useEffect, useState } from 'react';
import Layout from '../layout';
import styles from '../../styles/calendar.module.css';
import axios from 'axios';


const Calendar = () => {
  const [completedDates, setCompletedDates] = useState<number[]>([]);
  const [challenges, setChallenges] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const challengeResponse = await axios.get('/api/challenges');
        const challengeData = challengeResponse.data;
        // 예: 날짜를 기반으로 챌린지를 필터링하거나 변환합니다.
        const dates = challengeData.map((challenge: any) => new Date(challenge.completedDate).getDate());
        setCompletedDates(dates);

        const rewardResponse = await axios.get('/api/rewards');
        setChallenges(rewardResponse.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const days = Array.from({ length: 34 }, (_, i) => i >= 3 ? i - 2 : null);

  return (
    <Layout>
      <div className={styles.div}>
        <div className={styles.div2}></div>
        <div className={styles.div3}>August</div>
        <div className={styles.div4}>
          <div className={styles.div5}>Mo</div>
          <div className={styles.div6}>Tu</div>
          <div className={styles.div7}>We</div>
          <div className={styles.div8}>Th</div>
          <div className={styles.div9}>Fr</div>
          <div className={styles.div10}>Sa</div>
          <div className={styles.div11}>Su</div>
        </div>
      </div>
      <div className={styles.calendarGrid}>
        {days.map(day => (
          <div
            key={day}
            className={`${styles.day} ${completedDates.includes(day) ? styles.completed : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
      <div>
        <div className={styles.chaldiv}>
          <div className={styles.chaldiv2}>
            <div className={styles.chaldiv3a} />
            <div className={styles.chaldiv4}>영수증 챌린지</div>
          </div>
          <div className={styles.chaldiv5}>30 min.</div>
        </div>
      </div>
      <div className={styles.chalLine}></div>
      <div>
        <div className={styles.chaldiv}>
          <div className={styles.chaldiv2}>
            <div className={styles.chaldiv3b} />
            <div className={styles.chaldiv4}>기상 챌린지</div>
          </div>
          <div className={styles.chaldiv5}>60 min.</div>
        </div>
      </div>
      <div className={styles.chalLine}></div>
      <div>
        <div className={styles.chaldiv}>
          <div className={styles.chaldiv2}>
            <div className={styles.chaldiv3c} />
            <div className={styles.chaldiv4}>식단 챌린지</div>
          </div>
          <div className={styles.chaldiv5}>30 min.</div>
        </div>
      </div>
      <div className={styles.chalLine}></div>
      <div>
        <div className={styles.chaldiv}>
          <div className={styles.chaldiv2}>
            <div className={styles.chaldiv3d} />
            <div className={styles.chaldiv4}>운동 챌린지</div>
          </div>
          <div className={styles.chaldiv5}>15 min.</div>
        </div>
      </div>
      <div className={styles.chalLine}></div>

      <div className={styles.challenges}>
        {challenges.map((challenge, index) => (
          <React.Fragment key={index}>
            <div className={styles.chaldiv}>
              <div className={styles.chaldiv2}>
                <div
                  className={styles[`chaldiv3${challenge.type}`]}
                />
                <div className={styles.chaldiv4}>{challenge.name}</div>
              </div>
              <div className={styles.chaldiv5}>{challenge.duration}</div>
            </div>
            {index < challenges.length - 1 && <div className={styles.chalLine}></div>}
          </React.Fragment>
        ))}
      </div>    
    </Layout>
  );
};

export default Calendar;

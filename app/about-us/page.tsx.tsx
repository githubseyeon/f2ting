"use client"; // 이 줄을 추가하여 클라이언트 측에서만 실행되도록 명시

import { useEffect, useState } from 'react';
import Navigation from "../../components/navigation";
import styles from '../../styles/challenge.module.css';

export default function AboutUs() {
  const [currentDate, setCurrentDate] = useState<string>(''); // 현재 날짜 상태

  useEffect(() => {
    setCurrentDate(new Date().toLocaleString());
    const timer = setInterval(() => {
      setCurrentDate(new Date().toLocaleString()); // 매초마다 현재 날짜 업데이트
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <div className={styles.background}>
      <Navigation />
      <div className="content">
        <h1>About Us</h1>
        <p>This is the About Us page for our website. Here you can find information about our goals, mission, and the services we provide.</p>
        {/* 현재 날짜와 시간을 표시 */}
        <p style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center',fontSize:'18px' }}>{currentDate.toLocaleString()}</p>
        <div className={styles.timerCard}>
          <div className={styles.frame}></div>
          <div className={styles.ellipse}></div>
          <div className={styles.tag}>
            <div className={styles.add}>add</div>
          </div>
          <div className={styles.timer}>0 DAY 00:00</div>
          <div className={styles.timerDescription}>종료까지 0 DAY 00:00</div>
        </div>
        <div className={styles.modalBackground}></div>
        <div className={styles.button}>
          <button className={styles.rectangle}>다음</button>
        </div>
        <div className={styles.list}>
          <div className={styles.selectDate}>
            <div className={styles.bg}></div>
            <div className={styles.day}>
              <div className={styles.date}>17</div>
              <div className={styles.friday}>Friday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

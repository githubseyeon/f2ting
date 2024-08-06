"use client";

import React, { useState, useEffect } from 'react';
import styles from '../styles/challengeDay.module.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState<number | null>(null);
  const [endDate, setEndDate] = useState<number | null>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [dDay, setDDay] = useState<string | null>(null);
  const [challengeStarted, setChallengeStarted] = useState(false);

  const handleDateClick = (date: number) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date > startDate) {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
    if (startDate && endDate) {
      calculateDDay();
    }
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
    if (startDate && endDate) {
      calculateDDay();
    }
  };

  const renderDate = (date: number, day: string) => {
    return (
      <div
        key={date}
        className={styles.calendardivDay}
        onClick={() => handleDateClick(date)}
      >
        {day}
        {date === startDate && <div className={styles.startIcon}></div>}
        {date === endDate && <div className={styles.endIcon}></div>}
      </div>
    );
  };

  const calculateDDay = () => {
    if (startDate && endDate) {
      const currentDate = new Date();
      const endChallengeDate = new Date();
      endChallengeDate.setDate(currentDate.getDate() + (endDate - startDate));

      const endChallengeTime = endTime ? endTime.split(':') : ['0', '0'];
      endChallengeDate.setHours(parseInt(endChallengeTime[0]), parseInt(endChallengeTime[1]));

      const diffTime = endChallengeDate.getTime() - currentDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

      setDDay(`${diffDays}일 ${diffHours}시간 ${diffMinutes}분`);
    }
  };

  useEffect(() => {
    if (challengeStarted) {
      calculateDDay();
    }
  }, [challengeStarted, startDate, endDate, startTime, endTime]);

  const startChallenge = () => {
    if (startDate && endDate && startTime && endTime) {
      setChallengeStarted(true);
    } else {
      alert('기간과 시간을 모두 선택해주세요.');
    }
  };

  return (
    <div>
      {challengeStarted && dDay !== null && (
        <h3 className={styles.dday}>챌린지 종료까지 남은 D-day: {dDay}</h3>
      )}

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

      <div className={styles.calendardiv}>
        {renderDate(29, '29')}
        {renderDate(30, '30')}
        {renderDate(31, '31')}
        {renderDate(1, '1')}
        {renderDate(2, '2')}
        {renderDate(3, '3')}
        {renderDate(4, '4')}
      </div>
      <div className={styles.calendardiv}>
        {renderDate(5, '5')}
        {renderDate(6, '6')}
        {renderDate(7, '7')}
        {renderDate(8, '8')}
        {renderDate(9, '9')}
        {renderDate(10, '10')}
        {renderDate(11, '11')}
      </div>
      <div className={styles.calendardiv}>
        {renderDate(12, '12')}
        {renderDate(13, '13')}
        {renderDate(14, '14')}
        {renderDate(15, '15')}
        {renderDate(16, '16')}
        {renderDate(17, '17')}
        {renderDate(18, '18')}
      </div>
      <div className={styles.calendardiv}>
        {renderDate(19, '19')}
        {renderDate(20, '20')}
        {renderDate(21, '21')}
        {renderDate(22, '22')}
        {renderDate(23, '23')}
        {renderDate(24, '24')}
        {renderDate(25, '25')}
      </div>
      <div className={styles.calendardiv}>
        {renderDate(26, '26')}
        {renderDate(27, '27')}
        {renderDate(28, '28')}
        {renderDate(29, '29')}
        {renderDate(30, '30')}
        {renderDate(31, '31')}
        {renderDate(1, '1')}
      </div>

      {!challengeStarted && (
        <>
          <h2 className={styles.marginTop}>챌린지 할 기간 및 시간을 선택해주세요</h2>
          <div>
            <label>
              시작 시간:
              <input type="time" value={startTime} onChange={handleStartTimeChange} />
              종료 시간:
              <input type="time" value={endTime} onChange={handleEndTimeChange} />
            </label>
          </div>
          <button className={styles.button} onClick={startChallenge}>생성하기</button>
        </>
      )}

      <div className={styles.chaldiv}>
        <div className={styles.chaldiv2}>
          <div className={styles.chaldiv3a} />
          <div className={styles.chaldiv4}>챌린지 시작일</div>
        </div>
      </div>
      <div className={styles.chalLine}></div>
      <div>
        <div className={styles.chaldiv}>
          <div className={styles.chaldiv2}>
            <div className={styles.chaldiv3b} />
            <div className={styles.chaldiv4}>챌린지 종료일</div>
          </div>
        </div>
      </div>
      <div className={styles.chalLine}></div>
    </div>
  );
};

export default Calendar;

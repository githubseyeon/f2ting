"use client";

import Layout from '../layout';
import styles from '../../styles/achievement.module.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Achievement = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from /api/challenge endpoint
        const response = await fetch('/api/challenge');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch challenge data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: data.map(item => item.challenge_name), // Assume `challenge_name` is a column in your DB
    datasets: [
      {
        label: 'Completed Count',
        data: data.map(item => item.completed_count), // Assume `completed_count` is a column in your DB
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
        },
      },
    },
  };

  const today = new Date();
  const month = today.getMonth() + 1; // Months are 0-based
  const day = today.getDate();

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.dateContainer}>
          <h1 className={styles.date}>{month}월 {day}일</h1>
        </div>
        <div className={styles.chartContainer}>
          <Bar data={chartData} options={options} />
        </div>
      </div>

      <div className={styles.div}>
        <div className={styles.div2}>
          <div className={styles.div3}>
          </div>
          <div className={styles.div4}>
          </div>
        </div>
        <div className={styles.div5}>
          <div className={styles.div7}>3월 7일</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dd7d15bdec5e1ce73e33c92e735758e068b12298e6fce5b5254bb582a6847e9?apiKey=759653f2ab50441cb226416825bdb2ac&&apiKey=759653f2ab50441cb226416825bdb2ac"
          className={styles.img4}
        />
        <div className={styles.div8}>성공 여부</div>
        <div className={styles.div9}>
          <div className={styles.div10}>
            <div className={styles.div11} />
            <div className={styles.div12}>영수증 챌린지</div>
          </div>
          <div className={styles.div13}>😊</div>
        </div>
        <div className={styles.div14} />
        <div className={styles.div15}>
          <div className={styles.div16}>
            <div className={styles.div17} />
            <div className={styles.div18}>기상 챌린지</div>
          </div>
          <div className={styles.div19}>😭</div>
        </div>
        <div className={styles.div20} />
        <div className={styles.div21}>
          <div className={styles.div22}>
            <div className={styles.div23} />
            <div className={styles.div24}>식단 챌린지</div>
          </div>
          <div className={styles.div25}>😊</div>
        </div>
        <div className={styles.div26} />
        <div className={styles.div27}>
          <div className={styles.div28}>
            <div className={styles.div29} />
            <div className={styles.div30}>운동 챌린지</div>
          </div>
          <div className={styles.div31}>😊</div>
        </div>
        <div className={styles.div32} />
      </div>
    </Layout>
  );
};

export default Achievement;


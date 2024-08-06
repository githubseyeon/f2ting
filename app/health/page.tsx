import React from 'react';
import Layout from '../layout';
import Calendar from '../../components/CalendarClient';
import styles from '../../styles/challengeDay.module.css';

const Page = () => {
  return (
    <Layout>
      <h2 className={`${styles.textCenter} ${styles.marginTop}`}>운동 챌린지</h2>
      <Calendar />
    </Layout>
  );
};

export default Page;
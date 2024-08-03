import Layout from '../layout';
import styles from '../../styles/profile.module.css';

export const metadata = {
  title: 'Profile',
}

const Profile = () => {
  const reward = 590;
  const weekly_reward = 24;
  const rank = 4;
  return (
    <Layout>
      <div className={styles.div}>
        <div className={styles.div2}>
          <div className={styles.div3}>rewards</div>
          <div className={styles.div4}>{reward}</div>
        </div>
        <div className={styles.div5} />
        <div className={styles.div6}>
          <div className={styles.div7}>RANK</div>
          <div className={styles.div8}>#{rank}</div>
        </div>
      </div>
      <div className={styles.profilediv}>
        <div className={styles.profilediv2}>
          <div className={styles.profilediv3}>Monthly</div>
        </div>
        <div className={styles.profilediv4}>
          You have played a total {weekly_reward} rewards this month!
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a9946b1c35173ba2cf9135d439d91784e10f8272cfa607559cd53c1a3b7c27c?apiKey=759653f2ab50441cb226416825bdb2ac&&apiKey=759653f2ab50441cb226416825bdb2ac"
          className={styles.img3}
        />
      </div>
    </Layout>
  );
};

export default Profile;

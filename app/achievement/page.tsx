import Layout from '../layout';
import styles from '../../styles/achievement.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Achievement',
}

const Achievement = () => {
  return (
    <Layout>
      <div className={styles.div}>
        <div className={styles.div2}>
          <div className={styles.div3}>
          </div>
          <div className={styles.div4}>
          </div>
        </div>
        <div className={styles.div5}>
          <Link href="/">
            <div className={styles.div6}>Back</div>
          </Link>
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

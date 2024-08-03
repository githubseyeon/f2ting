import Layout from '../layout';
import styles from '../../styles/calendar.module.css';

export const metadata = {
  title: 'Calendar',
}

const Calendar = () => {
  return (
    <Layout>
      <div className={styles.div}>
        <div className={styles.div2}>
        </div>
        <div className={styles.div3}>March</div>
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
        <div color='var(--Neutral-Gray-4, #8f92a1)'>29</div>
        <div color='var(--Neutral-Gray-4, #8f92a1)'>30</div>
        <div color='var(--Neutral-Gray-4, #8f92a1)'>31</div>
        <div color='var(--Black, #000)'>1</div>
        <div color='var(--Black, #000)'>2</div>
        <div color='var(--Black, #000)'>3</div>
        <div color='var(--Black, #000)'>4</div>
      </div>
      <div className={styles.calendardiv}>
        <div color='var(--Black, #000)'>5</div>
        <div color='var(--Black, #000)'>6</div>
        <div color='var(--Black, #000)'>7</div>
        <div color='var(--Black, #000)'>8</div>
        <div color='var(--Black, #000)'>9</div>
        <div color='var(--Black, #000)'>10</div>
        <div color='var(--Black, #000)'>11</div>
      </div>
      <div className={styles.calendardiv}>
        <div color='var(--Black, #000)'>12</div>
        <div color='var(--Black, #000)'>13</div>
        <div color='var(--Black, #000)'>14</div>
        <div color='var(--Black, #000)'>15</div>
        <div color='var(--Black, #000)'>16</div>
        <div color='var(--Black, #000)'>17</div>
        <div color='var(--Black, #000)'>18</div>
      </div>
      <div className={styles.calendardiv}>
        <div color='var(--Black, #000)'>19</div>
        <div color='var(--Black, #000)'>20</div>
        <div color='var(--Black, #000)'>21</div>
        <div color='var(--Black, #000)'>22</div>
        <div color='var(--Black, #000)'>23</div>
        <div color='var(--Black, #000)'>24</div>
        <div color='var(--Black, #000)'>25</div>
      </div>
      <div className={styles.calendardiv}>
        <div color='var(--Black, #000)'>26</div>
        <div color='var(--Black, #000)'>27</div>
        <div color='var(--Black, #000)'>28</div>
        <div color='var(--Black, #000)'>29</div>
        <div color='var(--Black, #000)'>30</div>
        <div color='var(--Black, #000)'>31</div>
        <div color='var(--Neutral-Gray-4, #8f92a1)'>1</div>
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
    </Layout>
  );
};

export default Calendar;

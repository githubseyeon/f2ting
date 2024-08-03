import styles from '../styles/header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
      <Link href="/">
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3ffbde469855f064873d5a3f9e59867879c945340fca5345f9f8231c21792bd?apiKey=759653f2ab50441cb226416825bdb2ac&&apiKey=759653f2ab50441cb226416825bdb2ac"
        className={styles.img}
        />
      </Link>
    )
}

export default Header;
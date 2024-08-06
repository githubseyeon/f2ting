import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from '../styles/receiptscan.module.css';

export default function SecondNavigation(){
    const path = usePathname();
    const [count, setCount] = useState(0)
    return(

        <div className={styles.buttonsContainer}>
                <Link href="/pass" passHref>
                <button className={styles.button}>
                통과
                </button>
                </Link>
                <Link href="/cheatingday" passHref>
                <button className={styles.button}>
                치팅데이
                </button>
                </Link>
            </div>
    )


}
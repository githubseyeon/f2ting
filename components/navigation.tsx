"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link> 
      {path === "/" ? "🐾" : ""}
      <Link href="/calendar">Calendar</Link> 
      {path === "/calendar" ? "🐾" : ""}
      <Link href="/achievement">Achievement</Link> 
      {path === "/achievement" ? "🐾" : ""}
      <Link href="/profile">Profile</Link> 
      {path === "/profile" ? "🐾" : ""}
    </nav>
  );
};
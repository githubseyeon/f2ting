// pages/HomePage.tsx
"use client";

import ImageUploader from "@/components/ImageUploader";
import QRCodeScanner from "@/components/QRCodeScanner";
import Navigation from "@/components/navigation";
import Head from 'next/head';
import styles from '.././../styles/receiptscan.module.css';

const HomePage = () => {
  return (
    <div className={styles.container + " " + styles.background}>
      <Head>
        <title>Next.js Camera and QR Code Generator</title>
      </Head>
      <Navigation />
      <h1 className={styles.header}>QR 코드를 스캔하거나 이미지를 업로드하기</h1>

      <div className={styles.scanner}>
        <h2>QR 코드 스캔</h2>
        <QRCodeScanner />
      </div>

      <div className={styles.detector}>
        <h2>이미지 업로드</h2>
        <ImageUploader />
      </div>
      
    </div>
  );
};

export default HomePage;

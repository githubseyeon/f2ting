"use client";

import jsQR from 'jsqr';
import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const QRCodeScanner = () => {
  const webcamRef = useRef<Webcam>(null);
  const [scanResult, setScanResult] = useState<string | null>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (context) {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0, img.width, img.height);
            const imageData = context.getImageData(0, 0, img.width, img.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            if (code) {
              setScanResult(code.data);
            }
          }
        };
      }
    }
  }, [webcamRef]);

  useEffect(() => {
    const interval = setInterval(capture, 500);
    return () => clearInterval(interval);
  }, [capture]);

  return (
    <div style={{ backgroundColor: '#105d38', border: 'none',overflow: 'hidden' }}> {/* 배경색 설정 */}
      
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        style={{ border: 'none' }} // Webcam 태두리 제거
        videoConstraints={{
          facingMode: { exact: 'environment' }, // 후면 카메라 사용
        }}
      />
      {scanResult && (
        <div>
          <h3>Scan Result:</h3>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;

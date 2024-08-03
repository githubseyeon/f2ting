"use client";

import saveAs from "file-saver";
import { motion } from "framer-motion";
import { useState } from "react";
import QRCode from "react-qr-code";
import Button from "./Button";
import QRCodeInput from "./QRCodeInput";

const QRGenerator = () => {
  const [qrData, setQrData] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    setQrData(value);
    setIsGenerated(false);
  };

  const generateQRCode = () => {
    if (qrData) {
      setIsGenerated(true);
    }
  };

  const saveQRCode = () => {
    if (isGenerated) {
      const svgString = document.querySelector("svg")?.outerHTML;
      
      if (!svgString) return;

      const blob = new Blob([svgString], { type: "image/svg+xml" });
      saveAs(blob, "qrcode.svg");
    }
  };

  return (
    <>
      <QRCodeInput value={qrData} onChange={handleInputChange} />
      <Button
        onClick={generateQRCode}
        disabled={qrData === ""}
        title="Generate QR Code"
      />
      {isGenerated && (
        <>
          <motion.div
            className="border p-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <QRCode value={qrData} />
          </motion.div>
          <Button
            onClick={saveQRCode}
            disabled={!isGenerated}
            title="Save QR Code"
          />
        </>
      )}
    </>
  );
};

export default QRGenerator;
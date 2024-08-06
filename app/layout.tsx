"use client";

import Navigation from "../components/navigation";
import Header from "../components/header";
import Footer from "../components/footer";
import React from 'react';
import "../styles/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Navigation />
        <Footer />
      </body>
    </html>
  );
}


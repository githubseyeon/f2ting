import Navigation from "../components/navigation";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { ReactNode } from 'react';
import "../styles/global.css";

// export const metadata = {
//   title: {
//     template: '%s | Habit Tracker',
//     default: 'Home'
//   },
//   description: 'Better habit to be a better person',
// };

// type LayoutProps = {
//   children: ReactNode;
// };

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




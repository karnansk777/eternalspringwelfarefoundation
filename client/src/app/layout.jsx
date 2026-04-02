"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Hide Navbar and Footer on admin routes
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {!isAdminRoute && <Navbar />}
        {children}
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
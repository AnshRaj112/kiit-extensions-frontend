import Header from "./components/Header";
// import Footer from "./components/Footer";
import Foot from "./components/Foot";
import "./globals.css"; 
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Foot />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

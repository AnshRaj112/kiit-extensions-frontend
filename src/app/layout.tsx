import Header from "./components/Header";
import Foot from "./components/Foot";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main> {/* This is where your page content will go */}
        <Foot />
        <SpeedInsights />  {/* For speed performance insights */}
        <Analytics />  {/* For analytics */}
      </body>
    </html>
  );
}

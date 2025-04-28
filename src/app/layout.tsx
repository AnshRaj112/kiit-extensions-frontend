import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Foot";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import FloatingButtons from "./components/FloatingButtons"; // ✅ Import the new FloatingButtons client component

export const metadata = {
  title: "KIITeXtension",
  description: "Your site description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-transparent m-0 p-0 h-full">
        {/* Site Header */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Site Footer */}
        <Footer />

        {/* Vercel Analytics & Speed */}
        <SpeedInsights />
        <Analytics />

        {/* Floating Buttons like Apply Now, WhatsApp, Phone, Chat */}
        <FloatingButtons />
      </body>
    </html>
  );
}

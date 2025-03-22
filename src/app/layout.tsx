import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css"; // Optional global styles
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
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
            <Footer />
        <SpeedInsights />
       <Analytics />
      </body>
    </html>
  );
}

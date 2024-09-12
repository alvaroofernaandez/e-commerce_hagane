import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "./components/HeaderTop";
import HeaderMain from "./components/HeaderMain";
import NavBar from "./components/NavBar";
import MobNavBar from "./components/MobNavBar";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hagane - E-Commerce Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <NavBar />
        <MobNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

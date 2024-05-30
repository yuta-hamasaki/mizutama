// import { FadeIn } from './components/FadeIn';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "九陽商事",
  description: "貿易会社です。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

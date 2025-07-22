import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ScrollCraft",
  description: "Grow your brand with data-driven social media strategies.",
  openGraph: {
    title: "ScrollCraft",
    description: "Grow your brand with data-driven social media strategies.",
    images: [
      {
        url: "/scrollcraft-word.png", // 1200x630 preferred
        width: 1200,
        height: 630,
        alt: "ScrollCraft Hero Image",
      },
    ],
  },
  icons: {
    icon: '/logo-scroll-craft.svg',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <main className="min-h-screen px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

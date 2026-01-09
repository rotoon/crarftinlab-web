import type { Metadata } from "next";
import { Inter, Kanit, Press_Start_2P } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kanit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "CRAFTING LAB",
  description: "Digital Transformation & Creative Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${kanit.className} ${inter.variable} ${pixel.variable} antialiased text-white`}
      >
        {children}
      </body>
    </html>
  );
}

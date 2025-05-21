import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/shared";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairFont = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Musevio",
  description: "Museum Visual Information Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${playfairFont.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

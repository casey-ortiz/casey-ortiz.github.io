import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";

export const metadata: Metadata = {
  title: "Casey Ortiz",
  description: "The World's Kindest Person",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased h-screen"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

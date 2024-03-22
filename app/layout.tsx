import type { Metadata } from "next";
import "./ui/globals.css";
import { inter } from "./ui/fonts";
import Header from "./ui/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[url('/backgroundParten.png')]`}>
      <Header />
      {children}</body>
    </html>
  );
}
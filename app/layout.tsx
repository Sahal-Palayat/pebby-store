import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pebby Store",
  description: "Online Kids Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/PebbyLogo.png" />
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}

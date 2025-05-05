import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Zulfo Muhović",
  description: "Full Stack Developer",
  verification: {
    google: "xAEcQPksFuxiClIDf2rhNPmYcaZMzl9LnnyyoahK5gI",
  },
  openGraph: {
    title: "Zulfo Muhović",
    description: "Full Stack Developer",
    url: "https://zuxbrt.github.io",
    images: [
      {
        url: "https://zuxbrt.github.io/og-image.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zulfo Muhović",
    description: "Full Stack Developer",
    images: ["https://zuxbrt.github.io/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato} antialiased`} suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const sans = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Youth and the Gospel | GCC",
  description:
    "The Youth and the Gospel Event is a youth gathering which aims to proclaim the gospel of Jesus Christ to the youth and to teach them to make Him known",
  openGraph: {
    title: "The Youth and the Gospel | GCC",
    description:
      "The Youth and the Gospel Event is a youth gathering which aims to proclaim the gospel of Jesus Christ to the youth and to teach them to make Him known",
    url: "https://youth-and-the-gospel.vercel.app",
    siteName: "The Youth and the Gospel | GCC",
    images: [
      {
        url: "https://res.cloudinary.com/abide-in-the-vine/image/upload/v1699405877/gcc/yg-og_obrr14.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${sans.className} bg-zinc-900 text-white relative min-h-screen scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}

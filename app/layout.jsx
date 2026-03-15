import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // أضفنا هذا لضمان سرعة تحميل الخط
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Modern Menu App",
  description: "Experience the best dining with our digital menu",
};

export default function RootLayout({ children }) {
  return (
    // أضفنا suppressHydrationWarning لتجنب أخطاء التباين بين السيرفر والمتصفح
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
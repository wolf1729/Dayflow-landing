import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dayflow | Begin practice.",
  description: "A mindful habit-tracking and productivity app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans overflow-x-hidden`}
        style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
      >
        {children}
      </body>
    </html>
  );
}

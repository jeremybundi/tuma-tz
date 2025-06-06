// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./dashboard/components/NavBar"; // Adjust path if needed
import CookieBanner from "./dashboard/components/CookieBanner"; // <<< 1. Import the component


// Setup DM_Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: "--font-dm-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuma-Instant Money Transfer", 
  description: "Connecting you seamlessly.", 
   icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${geistMono.variable} font-sans antialiased`}> {/* Added font-sans as a default from dmSans variable */}
        <NavbarComponent />
      
        <main className="-mt-20 ">
          {children}
        </main>
        <CookieBanner /> 
      </body>
    </html>
  );
}
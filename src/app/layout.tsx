// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./dashboard/components/NavBar"; // Adjust path if needed

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
  title: "Tuma App", // You can update this
  description: "Connecting you seamlessly.", // You can update this
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
        {/* You can add a Footer component here if needed */}
      </body>
    </html>
  );
}
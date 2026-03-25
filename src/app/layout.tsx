import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naiam Studio – Validamos ideas de producto",
  description:
    "Acompañamos a emprendedores y startups en sus primeros pasos: investigación, validación y creación de MVPs funcionales.",
  icons: {
    icon: "/Naiam Icon _ White.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
